# The Wild Oasis - Client-Side Web Application

## Overview

**The Wild Oasis - Client-Side Web Application** is a modern, user-friendly platform built with **Next.js**. It enables guests to explore and reserve cabins, offering features such as real-time availability, dynamic pricing, and responsive design. This project forms the client-facing interface for The Wild Oasis ecosystem.

## Features

### Cabin Browsing and Filtering

- A visually appealing grid layout for displaying cabins with images, names, capacity, and prices.
- Filters for cabin sizes (small, medium, large) to enhance the guest experience.

### Dynamic Cabin Details

- Detailed information about each cabin, including amenities, pricing, and location.
- Integration of real-time data for cabin availability.

### Reservation System

- Interactive date selector with dynamic pricing calculation based on stay duration.
- Guest authentication to ensure secure booking processes.
- Reservation management, including edits and cancellations.

### User Authentication and Guest Area

- Secure login with personalized guest profiles.
- Guest dashboard for managing reservations and profile settings.

### Responsive and Accessible Design

- Mobile-first design principles for seamless usability on all devices.
- Styled with Tailwind CSS for consistency and ease of maintenance.

## File Structure

```
📂 src
├── 📂 app
│   ├── 📂 _components
│   │   ├── CabinCard.js
│   │   ├── Filter.js
│   │   ├── Header.js
│   │   ├── LoginMessage.js
│   │   ├── Reservation.js
│   │   ├── ReservationCard.js
│   │   ├── ReservationForm.js
│   │   ├── ReservationList.js
│   │   └── SideNavigation.js
│   ├── 📂 cabins
│   │   ├── Cabin.js
│   │   └── CabinList.js
├── 📂 hooks
│   ├── ReservationContext.js
├── 📂 lib
│   ├── actions.js
│   ├── auth.js
│   ├── data-service.js
├── 📂 public
│   └── logo.png
├── 📂 utils
│   ├── CurrencyFormatter.js
│   └── DateFormatter.js
```

## Technologies Used

- **Framework**: Next.js
- **Styling**: Tailwind CSS
- **Icons**: Heroicons
- **Date Handling**: date-fns
- **State Management**: React Context API and hooks
- **Routing**: Dynamic routes with Next.js

## How to Run the Application

1. Clone the repository:

   ```bash
   git clone https://github.com/meierrene/the-wild-oasis-website
   ```

2. Navigate to the project directory:

   ```bash
   cd the-wild-oasis-website
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the app in your browser:
   ```
   http://localhost:3000
   ```

## Deployment

The client-side application is deployed on Vercel:
[The Wild Oasis Client-Side Application](https://the-wild-oasis-website-rm.vercel.app/)

## Course Link

This project was created as part of [The Ultimate React Course 2024: React, Next.js, Redux & More](https://www.udemy.com/course/the-ultimate-react-course/) by Jonas Schedtmann.

## License

This project is licensed under the MIT License.

---

Feel free to update this README file as needed! If you have any issues or need further clarification, let me know. 😊
