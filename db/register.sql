insert into users (username, password, profile_pic)
values (${username}, ${password}, 'https://i.imgur.com/00jcTpf.jpg')
returning username, password, profile_pic