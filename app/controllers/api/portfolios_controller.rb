class Api::PortfoliosController < ApplicationController
  before_action :set_portfolio, only: [:show, :update, :destroy]
  
  def index
    render json: current_user.portfolios
  end

  def show
    render json: @portfolio
  end

  def create
    portfolio = Portfolio.new(portfolio_params)
      if portfolio.save
        render json: portfolio
      else
        render json: {errors: portfolio.errors.full_messages}, status: 422
      end
  end

  def update
    if @portfolio.update(portfolio_params)
      render json: @portfolio
    else
      render json: {errors: @portfolio.errors.full_messages}, status: 422
    end
  end

  def destroy
    @portfolio.destroy
  end

  private 
    def set_portfolio
      @portfolio = Portfolio.find(params[:id ])
    end

    def portfolio_params
      params.require(:portfolio).permit(
        :cash_on_hand, 
        :ira, 
        :gifts, 
        :retirement, 
        :other, 
        :income_a,
        :income_b,
        :additional_debt,
        :user_id 
      )
    end
end
