


		var wins = 0;
		var losses = 0;

		var targetNumber = 0;

		var createtargetNumber = function() {
			targetNumber = Math.floor((Math.random() * 100) + 1);
			$("#random-number").text(targetNumber);
		}

		createtargetNumber();

		var counter = 0;

		var numberOptions = [10, 5, 2, 1];

		for (var i = 0; i < numberOptions.length; i++) {
			var imageCrystal = $("<img>");
			imageCrystal.addClass("crystal-image");

			if (i == 0) {
				imageCrystal.attr("src", "assets/images/blue.png");
			}

			else if (i == 1) {
				imageCrystal.attr("src", "assets/images/green.png");
			}

			else if (i == 2) {
				imageCrystal.attr("src", "assets/images/red.png");
			}

			else {
				imageCrystal.attr("src", "assets/images/yellow.png");
			}

			imageCrystal.attr("data-crystalvalue", numberOptions[i]);

			$("#crystals").append(imageCrystal);
			
		}


		var reset = function() {
			counter = 0;
			$("#total-score").text(counter);
			createtargetNumber();
		}

		$(".crystal-image").on("click", function() {
			var crystalValue = ($(this).attr("data-crystalvalue"));
			crystalValue = parseInt(crystalValue);
			counter += crystalValue;

			$("#total-score").text(counter);

			if (counter === targetNumber) {
				alert("You win!");
				wins++;
				$("#wins-display").text(wins);
				reset();
			}

			else if (counter >= targetNumber) {
				alert("You lose!");
				losses++
				$("#losses-display").text(losses);
				reset();
			}

		});

