class Api::V1::CharactersController < ApplicationController
  def index
    render json: Character.all
  end

  def find
    @character = Character.where('left < ?', params[:x])
                .where('right > ?', params[:x])
                .where('top < ?', params[:y])
                .where('bottom > ?', params[:y])
                .find_by(name: params[:name])
    render json: @character
  end
  private

  def character_params
    params.require(:character).permit(:id, :name, :left, :right, :top, :bottom)
  end
  

end
