// eslint-disable-next-line import/prefer-default-export
export function pageLoad() {
  const content = document.getElementById("content");
  const description = document.createElement("p");
  description.classList.add("desc");
  description.textContent =
    "The go-to place to refill your non organic life-form needs. Our robotic staff has eliminated the chance of any human error. We calculate that you'll be back at a predetermined daily interval. Come on in, fuel up and enjoy! Assuming you've been programmed to feel emotion that is.";
  content.appendChild(description);

  const hours = document.createElement("h3");
  hours.classList.add("hours");
  hours.textContent = "Open Hours";
  content.appendChild(hours);

  const hoursList = document.createElement("ul");
  const monday = document.createElement("li");
  monday.textContent = "Monday: 5am - 9pm";
  const tuesday = document.createElement("li");
  tuesday.textContent = "Tuesday: 5am - 9pm";
  const wednesday = document.createElement("li");
  wednesday.textContent = "Wednesday: 5am - 9pm";
  const thursday = document.createElement("li");
  thursday.textContent = "Thursday: 5am - 9pm";
  const friday = document.createElement("li");
  friday.textContent = "Friday: 5am - 11pm";
  const saturday = document.createElement("li");
  saturday.textContent = "Saturday: 5am - 11pm";
  const sunday = document.createElement("li");
  sunday.textContent = "Sunday: 5am - 5pm";
  hoursList.append(
    monday,
    tuesday,
    wednesday,
    thursday,
    friday,
    saturday,
    sunday
  );
  content.appendChild(hoursList);

  const locationDiv = document.createElement("div");
  locationDiv.classList.add("loc");
  const location = document.createElement("h3");
  location.classList.add("location");
  location.textContent = "Location";
  const address = document.createElement("p");
  address.textContent = "0101 Robo Lane, San Diego, California";
  locationDiv.append(location, address);
  content.appendChild(locationDiv);
}
