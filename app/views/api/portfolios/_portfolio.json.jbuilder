json.extract!(
  portfolio,
  :id, :portfolio_image_url, :description, :name
)

if show_comments
  json.comments do
    json.array!(portfolio.comments) do |comment|
      json.partial! "api/comments/comment",
          comment: comment,
          show_hearts: true
        end
    end

  json.tags do
    json.array!(portfolio.taggings) do |tagging|
      json.partial! 'api/tags/tagging', tagging: tagging
    end
  end
end

if show_drawings
  json.drawings do
      json.array!(portfolio.drawings) do |drawing|
          json.partial! 'api/drawings/drawing',
           drawing: drawing,
           show_comments: false,
           show_hearts: true
            end
      end
end

if show_hearts
  json.hearts_count portfolio.hearts.count
  json.partial! "api/hearts/user_hearted",
    hearts: portfolio.hearts
end
