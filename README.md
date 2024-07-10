Zenicraze
=========

**Zenicraze** is an e-commerce platform designed to provide users with a seamless shopping experience. Featuring a range of unique products including resin crafts, candles, cakes, and crunchys, Zenicraze stands out with its curated selection and user-friendly interface.

Table of Contents
-----------------

-   [Product Categories](#product-categories)
-   [Features](#features)
-   [Upcoming Features](#upcoming-features)
-   [Technology Stack](#technology-stack)
-   [Installation](#installation)
-   [Usage](#usage)
-   [USP and Differentiating Factors](#usp-and-differentiating-factors)
-   [Contributing](#contributing)
-   [License](#license)

Product Categories
------------------

-   **Resin Crafts:** Handmade resin art including coasters, keychains, jewelry, and more.
-   **Candles:** Scented and decorative candles in various shapes and sizes.
-   **Cakes:** Customizable cakes for all occasions.
-   **Crunchys:** Crunchy snacks and treats, perfect for any time of day.

Features
--------

-   **User Authentication:** Secure sign-up and login functionality.
-   **Product Listings:** Detailed pages for each product category.
-   **Shopping Cart:** Add, remove, and update items in the cart.
-   **Order Management:** Track order status and history.
-   **Payment Integration:** Secure payment processing (coming soon).
-   **Responsive Design:** Optimized for desktop and mobile devices.

Upcoming Features
-----------------

-   **Wishlist:** Save products for future purchase.
-   **Reviews and Ratings:** User reviews and ratings for products.
-   **Discounts and Promotions:** Special offers and discount codes.
-   **Advanced Search and Filters:** Enhanced search functionality with multiple filters.

Technology Stack
----------------

-   **Frontend:** HTML, CSS, JavaScript
-   **Backend:** Django
-   **Database:** SQLite (development), PostgreSQL (production)
-   **Version Control:** Git
-   **Deployment:** (To be determined, e.g., Heroku, AWS)

Installation
------------

### Prerequisites

-   Python 3.10+
-   Django 3.x
-   pip

### Steps

1.  **Clone the repository:**

    `git clone https://github.com/13virat/zenicraze.git
    cd zenicraze`

2.  **Create a virtual environment and activate it:**
  
    `python -m venv env`
    `source env/bin/activate`  # On Windows use `env\Scripts\activate`

4.  **Install the dependencies:**

    `pip install -r requirements.txt`

5.  **Apply the migrations:**

    `python manage.py migrate`

6.  **Run the development server:**

    `python manage.py runserver`

7.  **Access the application:** Open your web browser and navigate to `http://127.0.0.1:8000`

Usage
-----

-   **Homepage:** Browse product categories and featured items.
-   **Product Pages:** View detailed descriptions, images, and prices of products.
-   **Cart:** Add products to your cart and proceed to checkout.
-   **Order Tracking:** Track the status of your orders from your account page.

USP and Differentiating Factors
-------------------------------

-   **Curated Selection:** Unique, handmade, and customizable products not easily found elsewhere.
-   **User Experience:** Intuitive design ensuring a seamless shopping experience.
-   **Customer Engagement:** Features like reviews, ratings, and wishlists enhance user interaction.
-   **Secure Transactions:** Emphasis on secure payment processing and data protection.

Contributing
------------

Contributions are welcome! Please follow these steps to contribute:

1.  Fork the repository.
2.  Create a new branch: `git checkout -b feature/your-feature-name`
3.  Make your changes and commit them: `git commit -m 'Add some feature'`
4.  Push to the branch: `git push origin feature/your-feature-name`
5.  Submit a pull request.

License
-------

This project is licensed under the MIT License. See the LICENSE file for details.
