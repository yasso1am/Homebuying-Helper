class House < ApplicationRecord
  belongs_to :user

  def self.do_math(house)
    name = house[:name]
    loan_term = house[:loan_term].to_i
    purchase_price = house[:purchase_price].to_i
    down_payment_percent = house[:down_payment_percent].to_f.round(2)
    interest_rate = house[:interest_rate].to_f.round(2)
    payments_per_year = house[:payments_per_year].to_i
    property_tax_annual = house[:property_tax_annual].to_i
    property_tax_monthly = (property_tax_annual / 12)
    hoa_monthly = house[:hoa_monthly].to_i
    insurance_monthly = house[:insurance_monthly].to_i
    
    down_payment_amount = (down_payment_percent / 100 * purchase_price).to_i
    loan_amount = (purchase_price - down_payment_amount)
      
    if down_payment_percent < 20
      pmi = (loan_amount * 0.9 / 100 / payments_per_year)
    else
      pmi = 0
    end

    # total_interest = (total_principal_interest - loan_amount)
    n = (loan_term * payments_per_year)
    @i = (interest_rate / 100 / payments_per_year)
    discount_factor = (((1+@i)**n)-1) / (@i*(1+@i)**n)
    monthly_principal_interest =  (loan_amount / discount_factor)
    monthly_payment_total = ( hoa_monthly + pmi + monthly_principal_interest + insurance_monthly + property_tax_monthly)
    total_principal_interest = (n * monthly_principal_interest)
    total_interest = (total_principal_interest - loan_amount)
    

    return new_house = {
        name: name,
        loan_term: loan_term,
        purchase_price: purchase_price,
        down_payment_percent: down_payment_percent,
        interest_rate: interest_rate,
        payments_per_year: payments_per_year,
        property_tax_annual: property_tax_annual,
        property_tax_monthly: property_tax_monthly,
        hoa_monthly: hoa_monthly,
        insurance_monthly: insurance_monthly,
        
        down_payment_amount: down_payment_amount,
        loan_amount: loan_amount,
        pmi: pmi,
        monthly_principal_interest: monthly_principal_interest,
        monthly_payment_total: monthly_payment_total,
        total_principal_interest: total_principal_interest,
        total_interest: total_interest
    }
  end
end
