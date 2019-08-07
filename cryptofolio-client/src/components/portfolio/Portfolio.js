import React, { Component } from 'react'

import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Typography from '@material-ui/core/Typography';

export default class Portfolio extends Component {
  removeCurrency = (event, item_id, item_name, amount) => {
    event.preventDefault();

    console.log(item_id, item_name);

    this.props.removeCurrency(item_id, item_name, amount);
  }

  render() {
    const portfolio_price =
      <Typography variant="h6" align="center" style={{ margin: 15 }}>
        Portfolio price: {this.props.price}
      </Typography>
    const portfolio =
      <Paper style={{ marginBottom: 20 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Currency Name</TableCell>
              <TableCell>Currency Amount</TableCell>
              <TableCell>Added at</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            { this.props.portfolio.map((portfolio_item) =>
              <TableRow key={portfolio_item.id}>
                <TableCell>{ portfolio_item.name }</TableCell>
                <TableCell>{ portfolio_item.amount }</TableCell>
                <TableCell>{ new Date(portfolio_item.created_at).toString() }</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={(event) => this.removeCurrency(event, portfolio_item.id, portfolio_item.name, portfolio_item.amount)}
                  >Remove</Button>
                </TableCell>
              </TableRow>
            ) }
          </TableBody>
        </Table>
      </Paper>

    if (this.props.portfolio.length === 0) {
      return(
        <div>
          { portfolio_price }
        </div>
      )
    } else {
      return(
        <div>
          { portfolio_price }
          { portfolio }
        </div>
      )
    }
  }
}