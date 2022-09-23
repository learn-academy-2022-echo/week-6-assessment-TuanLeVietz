# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1)
#  Class controller for the Blog Post table. It is inheriterd from the the application controller. It is the base for CRUD
class BlogPostsController < ApplicationController
  def index
    # ---2) 
    # The index method allows us to retrieve all the blog posts that exist in the db.
    @posts = BlogPost.all
  end

  # ---3)
  # The show method we can see a single specific blog post. Depending on the parameter of the id. This completed the R in CRUD
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4)
  # The new method lets RAILS know that a new object is about to be created. 
  def new
    @post = BlogPost.new
  end

  def create
    # ---5)
    # The create methods allows us to create a new blog post. In this method the newly created blog post is rendered and can also be re-rendered using a different type of parameter, a stronger parameter. The conditional redirects us to the path if the object is saved correctly in the db and if it doesnt it redirtects us to the new method.

    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

  def edit
    # ---6)
    # The edit method allows us to edit a blog post. 
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7)
    # The update method occurs after the edit method. After the edit method the update method is used to update the existing blog post in the db. 
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # ---8)
      # The destroy method removes a blog post from the db. 
      redirect_to blog_post_path(@post)
    end
  end

  # ---9)
  # The private method ensures that scope can only be accessed by the user, preventing injection attacks and other hacks. 
  private
  def blog_post_params
    # ---10) 
    #  This method is the strong parameter. It basically formats the blog post into a hash. 
    params.require(:blog_post).permit(:title, :content)
  end
end
