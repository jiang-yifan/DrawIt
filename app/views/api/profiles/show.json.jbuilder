json.extract!(
  @profile, :id, :cover_url, :avatar_url
)

unless current_user.profile == @profile
  json.drawings do
    json.array!(@profile.user.drawings) do |drawing|
      json.partial! "api/drawings/drawing",
            drawing: drawing,
            show_comments: false,
            show_hearts: true
          end
    end
  json.portfolios do
    json.array!(@profile.user.portfolios) do |portfolio|
      json.partial! "api/portfolios/portfolio",
            drawing: drawing,
            show_comments: false,
            show_hearts: true,
            show_drawings: true
        end
  end
  friend_ids = current_user.friends.pluck(:id)
  json.friends do
    json.array!(@profile.user.friends) do |friend|
      json.partial! "api/user_friends/friend",
            friend: friend,
            friend_ids: friend_ids
        end
  end
end
