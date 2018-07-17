import React from 'react'
import {
  Divider,
  Container,
  Table,
  Header,
} from 'semantic-ui-react'
import { connect } from 'react-redux'
import { setHeaders } from '../reducers/headers'
import axios from 'axios'

class HouseDisplay extends React.Component {
  state = { houses: [] }

  componentDidMount(){
    const { dispatch } = this.props
    axios.get('api/houses')
      .then( res => {
        dispatch(setHeaders(res.headers))
        this.setState({houses: res.data})
    })
  }

  houseName = (houses) => {
    return houses.map( (house, i) => 
      <Table.HeaderCell key={i}> {house.name} </Table.HeaderCell>
    )
  }

  loanTerm = (houses) => {
    return houses.map ( (house, i) =>
      <Table.Cell key={i}> { house.loan_term } years </Table.Cell> 
    )
  }

  paymentsPerYear = (houses) => {
    return houses.map ( (house, i) => 
      <Table.Cell key={i}> { house.payments_per_year } </Table.Cell>
    )
  }

  totalMonthlyPayments = (houses) => {
    return houses.map ( (house, i) =>
      <Table.Cell key={i}> { house.payments_per_year * house.loan_term } </Table.Cell>
    )
  }

  space = (houses) => {
    return houses.map ( (house, i) =>
      <Table.Cell key={i} disabled> - </Table.Cell>
    )
  }

  purchasePrice = (houses) => {
    return houses.map ((house, i) =>
      <Table.Cell key={i}> ${house.purchase_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} </Table.Cell>
    )
  }

  downPaymentPercent = (houses) => {
    return houses.map ((house, i) =>
    <Table.Cell key={i}> {house.down_payment_percent }% </Table.Cell> 
    )
  }
  
  downPaymentAmount = (houses) => {
    return houses.map((house, i) => 
    <Table.Cell key={i}> ${house.down_payment_amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} </Table.Cell>
    )
  }

  loanAmount = (houses) => {
    return houses.map((house, i) =>
    <Table.Cell key={i}> ${house.loan_amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} </Table.Cell>
    )
  }

  interestRate = (houses) => {
    return houses.map((house, i) =>
    <Table.Cell key={i}> {house.interest_rate }% </Table.Cell>
    )
  }

  pmiCalc = (houses) => {
    return houses.map((house, i) => {
    if (house.pmi === 0)
      return <Table.Cell disabled key={i}> No PMI </Table.Cell>
    return <Table.Cell key={i}> ${house.pmi} </Table.Cell>
      }
    )
  }

  insMonth = (houses) => {
    return houses.map( (house, i) => 
      <Table.Cell key={i}> ${house.insurance_monthly} </Table.Cell>
    )
  }

  hoa = (houses) => {
    return houses.map( (house, i) => {
    if (house.hoa === 0 )
      return <Table.Cell disabled> key={i}> No HOA Fees </Table.Cell>
    return <Table.Cell key={i}> ${house.hoa_monthly} </Table.Cell>
      }
    )
  }

  monthlyPI = (houses) => {
    return houses.map( (house, i) =>
      <Table.Cell key={i}> ${house.monthly_principal_interest}</Table.Cell>
    )
  }

  propTaxMonth = (houses) => {
    return houses.map( (house, i) => 
      <Table.Cell key={i}> ${house.property_tax_monthly} </Table.Cell>
    )
  }
  

  homeTable = () => {
    const { houses } = this.state
      return (
        <Table definition basic="very" striped unstackable compact>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell width={3}/>
              { this.houseName(houses) }
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell> Life of Loan (years) </Table.Cell>
              { this.loanTerm(houses) }
          </Table.Row>
          <Table.Row>
            <Table.Cell> Number of Payments/Year </Table.Cell>
              { this.paymentsPerYear(houses) }
          </Table.Row>
          <Table.Row>
            <Table.Cell> Total Monthly Payments </Table.Cell>
              { this.totalMonthlyPayments(houses) }
          </Table.Row>
          <Table.Row>
            <Table.Cell disabled> </Table.Cell>
            { this.space(houses)}
          </Table.Row>
          <Table.Row>
            <Table.Cell> Purchase Price </Table.Cell>
            { this.purchasePrice(houses) }
          </Table.Row>
          <Table.Row>
            <Table.Cell> Down Payment Percentage </Table.Cell>
              { this.downPaymentPercent(houses) }
          </Table.Row>
          <Table.Row>
            <Table.Cell> Down Payment Amount </Table.Cell>
              { this.downPaymentAmount(houses) }
          </Table.Row>
          <Table.Row>
            <Table.Cell> Loan Amount </Table.Cell>
              { this.loanAmount(houses) }
          </Table.Row>
          <Table.Row>
            <Table.Cell> Interest Rate </Table.Cell> 
              { this.interestRate(houses) }
          </Table.Row>
          <Table.Row>
            <Table.Cell disabled> </Table.Cell>
            { this.space(houses)}
          </Table.Row>
          <Table.Row>
            <Table.Cell> Monthly Principal & Interest </Table.Cell>
              { this.monthlyPI(houses)}
          </Table.Row>
          <Table.Row>
            <Table.Cell> PMI Monthly (calc. @ 0.9% of loan/payment) </Table.Cell>
              { this.pmiCalc(houses) }
          </Table.Row>
          <Table.Row>
            <Table.Cell> Monthly Homeowners Insurance </Table.Cell>
              { this.insMonth(houses)}
          </Table.Row>
          <Table.Row>
            <Table.Cell> Monthly HOA </Table.Cell>
              { this.hoa(houses)}
          </Table.Row>
          <Table.Row>
            <Table.Cell> Monthly Property Tax </Table.Cell>
              { this.propTaxMonth(houses)}
          </Table.Row>
        </Table.Body>
      </Table>
    )
}


  render() {
    const { houses } = this.state
    return(
      <Container>
      <Divider hidden />
        <Header as="h1" textAlign="center"> Home View </Header>
      <Divider hidden />
      { houses.length >= 1 ? this.homeTable() : <Header as="h3" textAlign="center"> Please add a home! </Header> }
      </Container>
    )
  }
}
export default connect()(HouseDisplay)