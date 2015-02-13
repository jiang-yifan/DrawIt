# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

iron_man = User.create(username: "LadysDream", password:"password", password_confirmation:"password")
hulk = User.create(username: "CuteKitten7", password:"password", password_confirmation:"password")
leonardo = User.create(username: "Leonardo", password:"password", password_confirmation:"password")
homer = User.create(username: "DonutEater234", password:"password", password_confirmation:"password")
lisa = User.create(username: "LaFilleIncomprise", password:"password", password_confirmation:"password")
bart = User.create(username: "ElBarto", password:"password", password_confirmation:"password")
van_gogh = User.create(username: "MisunderstoodGenius", password:"password", password_confirmation:"password")
thor = User.create(username: "TheHammerer", password:"password", password_confirmation:"password")
cookie_monster = User.create(username: "Cookies", password:"password", password_confirmation:"password")
black_widow = User.create(username: "BlackWidow", password:"password", password_confirmation:"password")

i = iron_man.id
h = hulk.id
le = leonardo.id
ho = homer.id
li = lisa.id
b = bart.id
v = van_gogh.id
t = thor.id
c = cookie_monster.id
bl = black_widow.id

iron_man.profile.update(avatar_url: "https://www.filepicker.io/api/file/dl5KBnOQ5aPaJ8fdMP0v", cover_url: "https://www.filepicker.io/api/file/BPB36Eq6TGKf6DMqVQxx")
thor.profile.update(avatar_url: "https://www.filepicker.io/api/file/CCwPJqrRQ26t62Wz6XCf", cover_url: "https://www.filepicker.io/api/file/fAxKlHaDRg2ODRMy3Q9g")
lisa.profile.update(avatar_url: "https://www.filepicker.io/api/file/So8awqCNT0i2aFfNkAWX", cover_url: "https://www.filepicker.io/api/file/K5pLAkFpQGaZB4NpzVWb")
homer.profile.update(avatar_url: "https://www.filepicker.io/api/file/mBpu6kZCRNSIrjHxYoTh", cover_url: "https://www.filepicker.io/api/file/n9eyK14Ry2hrPyR602Xm")
bart.profile.update(avatar_url: "https://www.filepicker.io/api/file/6mS74GTgQeOj9tYJYCJT", cover_url: "https://www.filepicker.io/api/file/Y3hOVYxrQEe5klurigct")
van_gogh.profile.update(avatar_url: "https://www.filepicker.io/api/file/oqjaShctTXiCtumAnGnh", cover_url: "https://www.filepicker.io/api/file/UBCOWC8S3eXcYt2E3tSN")
cookie_monster.profile.update(avatar_url: "https://www.filepicker.io/api/file/9NB65MKvS4GmTJ6CTiJo", cover_url: "https://www.filepicker.io/api/file/2OELyTfoSh6vuJIInHhR")
black_widow.profile.update(avatar_url: "https://www.filepicker.io/api/file/Pf2VchL9QPKEW2ZKQP6A", cover_url: "https://www.filepicker.io/api/file/ClVBWBES9SvrA1kNUqW3")
leonardo.profile.update(avatar_url: "https://www.filepicker.io/api/file/TKWqPLwKQAe3IiOzXMKl", cover_url: "https://www.filepicker.io/api/file/AY7vxbqISYWq4CpFKhM4")
hulk.profile.update(avatar_url: "https://www.filepicker.io/api/file/XensjDLTzKZ3oaLHi3Ql", cover_url: "https://www.filepicker.io/api/file/9InYBhESSZiAwJN2dEpl")

iron_man.drawings.create(file_url: "https://www.filepicker.io/api/file/5zi4C8JwRcCGNcoUN3P9")
iron_man.drawings.create(file_url: "https://www.filepicker.io/api/file/2Pz51PEXR924g434ujLw")
iron_man.drawings.create(file_url: "https://www.filepicker.io/api/file/VYWHwuoTTCODi0Tkkhu6")
iron_man.drawings.create(file_url: "https://www.filepicker.io/api/file/oMoK7vAySJm0dEERuEFB")
hulk.drawings.create(file_url: "https://www.filepicker.io/api/file/DrMOxXmKSJC2HsfUgv7A")
leonardo.drawings.create(file_url: "https://www.filepicker.io/api/file/wlVEX587SHSYDckjxCJb")
leonardo.drawings.create(file_url: "https://www.filepicker.io/api/file/3ja1jWnRQgWPeABss0mx")
leonardo.drawings.create(file_url: "https://www.filepicker.io/api/file/MZlIeB3Qcqp77ZNZlpes")
leonardo.drawings.create(file_url: "https://www.filepicker.io/api/file/vCgYszIKT5CRtVbsmlhO")
thor.drawings.create(file_url: "https://www.filepicker.io/api/file/uKKMdQBSWy1iSk2WieJg")
van_gogh.drawings.create(file_url: "https://www.filepicker.io/api/file/pntdQQbYRTm2QGUo4Hj4")
van_gogh.drawings.create(file_url: "https://www.filepicker.io/api/file/CvSsmAUFQmSA0NDkQRS8")

iron_man.friended_users.create(friend_id: h)
iron_man.friended_users.create(friend_id: c)
iron_man.friended_users.create(friend_id: t)
iron_man.friended_users.create(friend_id: bl)
iron_man.friended_users.create(friend_id: le)
iron_man.friended_users.create(friend_id: v)
bart.friended_users.create(friend_id: i)
bart.friended_users.create(friend_id: h)
bart.friended_users.create(friend_id: t)
bart.friended_users.create(friend_id: bl)
bart.friended_users.create(friend_id: c)
lisa.friended_users.create(friend_id: le)
lisa.friended_users.create(friend_id: v)
lisa.friended_users.create(friend_id: b)
lisa.friended_users.create(friend_id: ho)
thor.friended_users.create(friend_id: i)
thor.friended_users.create(friend_id: h)
thor.friended_users.create(friend_id: bl)
thor.friended_users.create(friend_id: c)
black_widow.friended_users.create(friend_id: h)
black_widow.friended_users.create(friend_id: i)
black_widow.friended_users.create(friend_id: t)
homer.friended_users.create(friend_id: c)
homer.friended_users.create(friend_id: i)
homer.friended_users.create(friend_id: h)
homer.friended_users.create(friend_id: t)
homer.friended_users.create(friend_id: b)
homer.friended_users.create(friend_id: li)
van_gogh.friended_users.create(friend_id: le)
leonardo.friended_users.create(friend_id: v)
hulk.friended_users.create(friend_id: i)
hulk.friended_users.create(friend_id: t)
hulk.friended_users.create(friend_id: bl)
hulk.friended_users.create(friend_id: c)

iron_man.user_favorite_drawings.create(drawing_id:5)
iron_man.user_favorite_drawings.create(drawing_id:9)
black_widow.user_favorite_drawings.create(drawing_id:5)
thor.user_favorite_drawings.create(drawing_id:5)
bart.user_favorite_drawings.create(drawing_id:1)
bart.user_favorite_drawings.create(drawing_id:3)
bart.user_favorite_drawings.create(drawing_id:5)

iron_man.hearts.create(heartable_id: 5, heartable_type:"Drawing")
iron_man.hearts.create(heartable_id: 9, heartable_type:"Drawing")
black_widow.hearts.create(heartable_id: 5, heartable_type:"Drawing")
thor.hearts.create(heartable_id: 5, heartable_type:"Drawing")
bart.hearts.create(heartable_id: 1, heartable_type:"Drawing")
bart.hearts.create(heartable_id: 3, heartable_type:"Drawing")
bart.hearts.create(heartable_id: 5, heartable_type:"Drawing")
