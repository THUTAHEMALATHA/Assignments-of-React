1.Role of Frontend(FE)
Front end handles the client-side part of web applications that users directly interact with it creates the Visual and manages user inputs. Front end communicates with the backend through APIs to fetch or send data.
*User Interface: Uses HTML for stucture, CSS for styling and responsive design, and javascript for dynamic elements like animations and layouts.
*User Interaction: Captures events such as a clicks , form submissions, and scrolling via javascript to provide immediate feedback without age reloads.
*Communication with backend: Sends HTTP requests (GET,POST) using fetch or Axios to apis, processes JSON responses, and updates the UI dynamically.

 2. Role of Backend(BE)
 Backend manages server-side operations that power web applications behind the scenes. It processes requests, handles data, and ensures secure operations. Backend runs independentlly from the frontend for scability.
 * server side processing:
 Exceutes business rule, Workflows, and computations like from validation or calculations on the server.
 * Database handling : Connections to database for CRUD operations (Create, read, update, delete) quering data, and managing storage.
 * Security and authentication: Implements user Login, password hashing and protection against attacks like SQL, Injection.

 3.Business LOgic:
 Business Logic refers to the core rules and processes that define how a web application operates according to specific business requirements. It sites between the user interface and data storage, handling validations, calculations and workflows. This logc ensure applications follow real world rules rather than just techinical functions.

 4.Client-server Model:
 The client server model is a distrubted architecture where the clients rwquest services from server over a network. it seperates user-facing tasks from resource management for efficiency.
 Client:The requester, typically a web browser or mobile app, that intiates communication and handles user interface.
 Server: The provider that listens for requests, Processes them  and sends responses it manages resource like data and computation.
 Communicatin:
 -Client sends HTTPS/HTTP request (e.g., GET/API/ Users).
 -Server Processes (queries DB, Applies logic ),responds with data(JSON/XML)
 -Uses protocols like HTTP fo stateless exchanges , TCP ensures reliable delievery.
 
 5.Three Tier Architecture:
 Three Tier architecture divides web applications into three independent layers for better oraginastion, scalability and maintaience. Each layer has a specific role, allowing changes in one without affeccting others.
 Presentation Layer: Handles uses interface using HTML/CSS/JS : captures inputs and displays data.
 Application Layer: Processes logic, Validations and workflows : acts as middle ware between presentation and data.
 Data Layer: Manages storage with databases(SQL,NOSQL); handles queries and persistance.

 6.JavaScript as a backend language:
 Javascript serves as a backend language through Node.js enabling full stack development with one language. Its event drirven model suits modern web needs.
 -performance:  NOn-blocking I/O handles thousands of concurrent requests efficiently for real time apps like chat.
 -EcoSystem : Vast npm packages for everything from databse to authentication  unifed JS reduces context- switching.
 -Popular Backend frameworks: Express.js for lightweight APIs, NestJs for enerprise scale apps , Fastify for high speed routing. 
