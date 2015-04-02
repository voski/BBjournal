class Api::PostsController < ApplicationController
  def create
    @post = Post.new(post_params)
    if @post.save
      render 'show'
    else
      render json: @comment.errors, status: 422
    end
  end

  def show
    @post = Post.find(params[:id])
    render 'show'
  end

  def index
    @posts = Post.all
    render 'index'
  end

  def destroy
    @post = Post.find(params[:id])
    @post.destroy!
    render "show"
  end

  def update
    @post = Post.find(params[:id])
    if @post.update(post_params)
      render 'show'
    else
      render json: @post.errors.full_messages, status: 422
    end
  end


  def post_params
    params.require(:post).permit(:title, :body)
  end
end
