import { useEffect, useState } from 'react';

// Components
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Radio from '@mui/material/Radio';

// API
import PlanAPI from 'services/plan';
import ItemsOfPlanAPI from 'services/itemsOfPlan';

function Selections(props) {
  const [planRows, setPlanRows] = useState([]);
  const [planNames, setPlanNames] = useState([]);
  const [selectedPlan, setSelectedPlan] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getPlans = async () => {
    try {
      setIsLoading(true);
      const itemsOfPlanData = await ItemsOfPlanAPI.ItemsOfPlan();
      const plansData = await PlanAPI.Plans();

      const rows = [];
      const planNamesList = [];

      itemsOfPlanData.forEach(({ id, name }) => {
        const rowData = [name];
        plansData.forEach((plan) => {
          rowData.push(Boolean(plan.planItems[id]));
        });

        rows.push(rowData);
      });

      const priceRow = [''];
      plansData.forEach((plan) => {
        planNamesList.push(plan.name);
        priceRow.push(plan.price);
      });

      rows.push(priceRow);

      setPlanRows(rows);
      setPlanNames(planNamesList);

      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChangeSelectedPlan = (event) => {
    setSelectedPlan(event.target.value);
  };

  useEffect(() => {
    getPlans();
  }, []);

  const renderPrice = (row) => {
    const cells = [];

    for (let i = 1; i < row.length; i += 1) {
      cells.push((
        <TableCell key={`${i}_price`} align="center">
          <Radio
            checked={selectedPlan === i.toString()}
            onChange={handleChangeSelectedPlan}
            value={i.toString()}
            name="radio-buttons"
          />
          {`$HK ${row[i]} / Month`}
        </TableCell>
      ));
    }

    return cells;
  };
  const renderContent = (row) => {
    const cells = [];

    for (let i = 1; i < row.length; i += 1) {
      cells.push((
        <TableCell key={`${row[0]}_${i}_checked`} align="center">{row[i] ? 'V' : 'X'}</TableCell>
      ));
    }

    return cells;
  };

  return (
    <Container maxWidth="lg">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell />
              {
                  planNames.map((name) => (
                    <TableCell key={name} align="center">{name}</TableCell>
                  ))
              }
            </TableRow>
          </TableHead>
          <TableBody>
            {planRows.map((row, i) => {
              if (i !== planRows.length - 1) {
                return (
                  <TableRow
                    key={row[0]}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell key={`${row[0]}_cell}`} component="th" scope="row">
                      {row[0]}
                    </TableCell>
                    {
                        renderContent(row)
                    }
                  </TableRow>
                );
              }
              return (
                <TableRow
                  key="price"
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell key="price_cell" component="th" scope="row" />
                  {
                        renderPrice(row)
                    }
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>

      {isLoading && (
      <Box display="flex" mt={5} mb={3} justifyContent="center">
        <CircularProgress size={36} />
      </Box>
      ) }
    </Container>
  );
}

export default Selections;
