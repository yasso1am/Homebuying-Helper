class Api::HousesController < ApplicationController
  before_action :set_house, only: [:show, :update, :destroy]
  
  def index
    render json: current_user.houses
  end

  def show
    render json: @house
  end

  def create
    house = House.new(house_params)
      if house.save
        render json: house
      else
        render json: {errors: house.errors.full_messages}, status: 422
      end
  end

  def update
    if @house.update(house_params)
      render json: @house
    else
      render json: {errors: @house.errors.full_messages}, status: 422
    end
  end

  def destroy
    @house.destroy
  end

  private
    def set_house
      @house = House.find(params[:id])
    end

    def house_params
      params.require(:house).permit(
        :name, *
        :purchase_price, *
        :loan_term, *
        :down_payment, *
        :interest_rate, *
        :payments_per_year, *
        :pmi,
        :insurance_monthly,
        :property_tax_annual,
        :hoa_monthly,
        :total_interest,
        :total_principal_interest,
        :total_monthly,
        :move_in_price,
        :closing_cost,
        :discount_points,
        :user_id
        )
    end

end
