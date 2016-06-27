class Api::BenchesController < ApplicationController

  def create
    @bench = Bench.create!(bench_params)
    render :create
  end

  def index
    @benches = Bench.in_bounds(params[:bounds])
    render :index
  end


  private
  def bench_params
    params.require(:bench).permit(:description, :lat, :lng)
  end

end
