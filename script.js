const username = prompt("Введите имя: ")
				let count = 0
				if (username) {
					document.getElementById('title').innerHTML = "Ваш список дел, " + username + ":"
				} else {
					document.getElementById('title').innerHTML = "Список дел, анонимного пользователя:"
				}

				function addTask() {
					count = count + 1
		
					if (count > 5) {
						document.getElementById('error').innerHTML = "Можно ввести до 5 дел"
						return
					}
					
					const input = document.getElementById('input')
					const task = input.value
					const toList = document.getElementById("list")
					toList.innerHTML = toList.innerHTML + "<p>" + count + ". " + task + "</p>"
					input.value = ""
			
				}




