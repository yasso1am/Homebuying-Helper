import React from 'react'
import {
  Form,
  Container,
  Divider,
} from 'semantic-ui-react'

class HomeForm extends React.Component {
  state = { name: '', loan_term: null, payments_per_year: 12 }

  handleSubmit = (e) => {
    e.preventDefault();

  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  render() {
    const { name, loan_term, payments_per_year } = this.state
    return(
      <Container>
      <Divider hidden />
        <Form onSubmit={this.handleSubmit}>
        <Form.Group>
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
        </Form.Group>
        <Form.Group>
          <Form.Field>
              <label htmlFor='Loan Term'>How many payments/year do you plan on making?</label>
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
              <label htmlFor='Loan Term'>Loan life in years?</label>
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
        </Form>
      </Container>
    )
  }
}

export default HomeForm