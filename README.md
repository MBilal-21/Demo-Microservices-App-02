<h2>Overview</h2>
<p>This is a simple microservices application consisting of three services, all of which are linked to a client frontend. The services included in this application are:</p>
<ul>
  <li><strong>Order Service</strong></li>
  <li><strong>User Service</strong></li>
  <li><strong>Product Service</strong></li>
</ul>

<h2>Services</h2>

<h3>User Service</h3>
<p>Manages user registration and login functionality. Users can register and log in via the frontend, and the user data is handled by the User Service.</p>

<h3>Product Service</h3>
<p>Handles product-related operations. Users can view products via the frontend, which fetches data from the Product Service. Products can also be added directly via the Product Service at its endpoint, and the client-side product list will update accordingly.</p>

<h3>Order Service</h3>
<p>Manages order placement and tracking. Users can place orders via the frontend, and the Order Service handles these requests. The order list is updated and accessible at the URL where the Order Service is running: <a href="http://localhost:5003/orders">http://localhost:5003/orders</a>.</p>

<h2>Frontend Integration</h2>
<p>The client frontend is linked to all three services, providing a seamless user experience. Users can register, log in, view products, and place orders through the frontend interface.</p>

<h2>Accessing the Services</h2>

<h3>User Service</h3>
<p>Accessible via the frontend for user registration and login.</p>

<h3>Product Service</h3>
<p>Users can view the product list via the frontend. Products can be added directly through the Product Service's endpoint, and any changes will be reflected on the client side.</p>

<h3>Order Service</h3>
<p>Orders can be placed via the frontend. The list of orders is available at: <a href="http://localhost:5003/orders">http://localhost:5003/orders</a>.</p>

<h2>Summary</h2>
<p>This microservices application demonstrates how multiple services can work together, linked through a client frontend, to provide a functional and cohesive system for managing users, products, and orders.</p>