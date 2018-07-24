import React from 'react'
import axios from 'axios'
import { setHeaders } from '../reducers/headers'
import { setFlash } from '../reducers/flash'
import { connect } from 'react-redux'
import {
  Form,
  Container,
  Divider,
  Label,
  Button,
} from 'semantic-ui-react'

class HomeForm extends React.Component {
  state = { name: '', 
            loan_term: '', 
            payments_per_year: '', 
            purchase_price: '', 
            down_payment_percent: '',
            interest_rate: '',
            insurance_monthly: '',
            property_tax_annual: '',
            hoa_monthly: '',
          }

  handleSubmit = (e) => {
    const { dispatch } = this.props
    const house = this.state
    axios.post('api/houses', { house })
    .then (res => {
      dispatch(setHeaders(res.headers))
      dispatch(setFlash('Home added!', 'green'))
    })
    .catch( res => {
      dispatch(setHeaders(res.headers));
      const messages =
        res.response.data.errors.map(message =>
          <div>{message}</div>);
        dispatch(setFlash(messages, 'red'));
    })
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  render() {
    const { 
      name, 
      loan_term, 
      payments_per_year, 
      purchase_price, 
      down_payment_percent,
      interest_rate,
      insurance_monthly,
      property_tax_annual,
      hoa_monthly,
    } = this.state
    
    return(
      <Container>
      <Divider hidden />
        <Form onSubmit={this.handleSubmit}>
          <Form.Field>
              <label htmlFor='House Nickname'>House Nickname</label>
              <input
                name='name'
                placeholder='Nickname'
                required
                value={name}
                onChange={this.handleChange}
              />
          </Form.Field>
        <Form.Group>
          <Form.Field>
              <label htmlFor='payments_per_year'>Payments/year</label>
              <input
                name='payments_per_year'
                placeholder='Payments Per Year'
                required
                type='number'
                value={payments_per_year}
                onChange={this.handleChange}
              />
          </Form.Field>
        </Form.Group>
        <Form.Group>
          <Form.Field>
              <label htmlFor='Loan Term'>Loan life in years</label>
              <input
                name='loan_term'
                type='number'
                placeholder='Loan Term'
                required
                value={loan_term}
                onChange={this.handleChange}
              />
          </Form.Field>
        </Form.Group>
        <Form.Group>
          <Form.Field>
              <label htmlFor='Purchase Price'>Purchase Price</label>
              <input
                name='purchase_price'
                type='number'
                placeholder='Purchase Price'
                required
                value={purchase_price}
                onChange={this.handleChange}
              />
          </Form.Field>
        </Form.Group>
        <Form.Group>
          <Form.Field>
              <label htmlFor='down_payment_percent'>Down Payment %</label>
              <input
                name='down_payment_percent'
                type='number'
                placeholder='Down Payment %'
                required
                value={down_payment_percent}
                onChange={this.handleChange}
              />
          </Form.Field>
        </Form.Group>
            <Label pointing size='small'> ${ down_payment_percent / 100 * purchase_price } </Label>
        <Form.Group>
          <Form.Field>
              <label htmlFor='Interest Rate'>Interest Rate</label>
              <input
                name='interest_rate'
                type='number'
                placeholder='Interest Rate'
                required
                value={interest_rate}
                onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <label htmlFor='insurance_monthly'>Insurance Monthly</label>
            <input
              name='insurance_monthly'
              type='number'
              placeholder='Monthly Insurance Est.'
              required
              value={insurance_monthly}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <label htmlFor="property_tax_annual">Annual Property Tax</label>
              <input
                name="property_tax_annual"
                type="number"
                placeholder="Annual Property Tax Est."
                required
                value={property_tax_annual}
                onChange={this.handleChange}
              />
          </Form.Field>
          <Form.Field>
            <label htmlFor="hoa_monthly"> Monthly HOA ? </label>
              <input
                name="hoa_monthly"
                type="number"
                placeholder="Monthly HOA"
                value={hoa_monthly}
                onChange={this.handleChange}
              />
          </Form.Field>
        </Form.Group>  
        <Button type="submit"> Add home </Button>    
        </Form>
      </Container>
    )
  }
}

export default connect()(HomeForm)