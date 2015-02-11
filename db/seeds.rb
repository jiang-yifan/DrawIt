# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

iron_man = User.create(username: "LadyKiller", password:"password", password_confirmation:"password")
hulk = User.create(username: "CuteKitten7", password:"password", password_confirmation:"password")
leonardo = User.create(username: "Leonardo", password:"password", password_confirmation:"password")
homer = User.create(username: "DonutEater234", password:"password", password_confirmation:"password")
lisa = User.create(username: "LaFilleIncomprise", password:"password", password_confirmation:"password")
bart = User.create(username: "ElBarto", password:"password", password_confirmation:"password")
van_gogh = User.create(username: "MisunderstoodGenius", password:"password", password_confirmation:"password")
thor = User.create(username: "TheHammerer", password:"password", password_confirmation:"password")
cookie_monster = User.create(username: "Cookies", password:"password", password_confirmation:"password")
black_widow = User.create(username: "BlackWidow", password:"password", password_confirmation:"password")

iron_man.profile.update(avatar_url: "https://www.filepicker.io/api/file/dl5KBnOQ5aPaJ8fdMP0v", cover_url: "https://www.filepicker.io/api/file/YLW9LYqScad5bPe4oGbg")
thor.profile.update(avatar_url: "https://www.filepicker.io/api/file/CCwPJqrRQ26t62Wz6XCf", cover_url: "https://www.filepicker.io/api/file/PHZOs639TYGthemHkIXy")
lisa.profile.update(avatar_url: "https://www.filepicker.io/api/file/So8awqCNT0i2aFfNkAWX", cover_url: "https://www.filepicker.io/api/file/50K7iqJQ6OPUDs2P4bYg")
homer.profile.update(avatar_url: "https://www.filepicker.io/api/file/mBpu6kZCRNSIrjHxYoTh", cover_url: "https://www.filepicker.io/api/file/n9eyK14Ry2hrPyR602Xm")
bart.profile.update(avatar_url: "https://www.filepicker.io/api/file/6mS74GTgQeOj9tYJYCJT", cover_url: "https://www.filepicker.io/api/file/Y3hOVYxrQEe5klurigct")
van_gogh.profile.update(avatar_url: "https://www.filepicker.io/api/file/oqjaShctTXiCtumAnGnh", cover_url: "https://www.filepicker.io/api/file/UBCOWC8S3eXcYt2E3tSN")
cookie_monster.profile.update(avatar_url: "https://www.filepicker.io/api/file/9NB65MKvS4GmTJ6CTiJo", cover_url: "https://www.filepicker.io/api/file/2OELyTfoSh6vuJIInHhR")
black_widow.profile.update(avatar_url: "https://www.filepicker.io/api/file/Pf2VchL9QPKEW2ZKQP6A", cover_url: "https://www.filepicker.io/api/file/ClVBWBES9SvrA1kNUqW3")
leonardo.profile.update(avatar_url: "https://www.filepicker.io/api/file/TKWqPLwKQAe3IiOzXMKl", cover_url: "https://www.filepicker.io/api/file/AY7vxbqISYWq4CpFKhM4")
hulk.profile.update(avatar_url: "https://www.filepicker.io/api/file/XensjDLTzKZ3oaLHi3Ql", cover_url: "https://www.filepicker.io/api/file/9InYBhESSZiAwJN2dEpl")
