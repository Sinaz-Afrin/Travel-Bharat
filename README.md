# Travel Bharat Backend API 🎉

A clean, production-ready Node.js backend for the Travel Bharat tourism platform. Built with Express, MongoDB, and Mongoose.

## 🚀 Quick Start

### Prerequisites
- Node.js (v14+)
- npm or yarn
- MongoDB Atlas account (free)

### Installation

1. **Navigate to backend folder:**
   ```bash
   cd backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Setup MongoDB Atlas:**
   - Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
   - Create a free account
   - Create a new cluster
   - Get your connection string
   - Replace `yourusername` and `yourpassword` in the connection string

4. **Configure .env file:**
   ```bash
   # Copy .env.example to .env (or just edit the existing .env)
   ```
   
   Update `.env` with your MongoDB URI:
   ```
   MONGO_URI=mongodb+srv://yourusername:yourpassword@cluster0.mongodb.net/travel_bharat?retryWrites=true&w=majority
   PORT=5000
   CORS_ORIGIN=http://localhost:5173
   ```

5. **Run the server:**
   ```bash
   # Development mode (with auto-reload)
   npm run dev
   
   # Production mode
   npm start
   ```

6. **Verify server is running:**
   - Open browser: `http://localhost:5000`
   - You should see the welcome message

---

## 📁 Folder Structure

```
backend/
├── config/
│   └── db.js              # MongoDB connection configuration
├── controllers/
│   └── placeController.js # Business logic for places
├── models/
│   └── Place.js           # Mongoose schema and model
├── routes/
│   └── placeRoutes.js     # API route definitions
├── server.js              # Express server setup
├── package.json           # Dependencies
├── .env                   # Environment variables
└── .env.example           # Example .env template
```

---

## 🧱 Place Schema

```javascript
{
  name: String (required),
  state: String (required),
  region: String (required),
  city: String,
  category: String (enum: ['Historical', 'Beach', 'Mountain', 'Religious', 'Cultural', 'Adventure', 'Nature', 'Urban']),
  description: String,
  bestTimeToVisit: String,
  entryFee: String,
  locationLink: String,
  images: [String],
  nearbyAttractions: [String],
  createdAt: Date (default: now),
  updatedAt: Date (auto)
}
```

---

## 🔌 API Endpoints

### 1. Get All Places
```
GET /api/places
```

**Query Parameters (all optional):**
- `region` - Filter by region (e.g., `?region=North`)
- `category` - Filter by category (e.g., `?category=Beach`)
- `state` - Filter by state (e.g., `?state=Goa`)
- `search` - Search in name, description, city (e.g., `?search=taj`)

**Example Requests:**
```bash
# Get all places
curl http://localhost:5000/api/places

# Filter by region
curl http://localhost:5000/api/places?region=North

# Filter by category
curl http://localhost:5000/api/places?category=Beach

# Search
curl http://localhost:5000/api/places?search=taj
```

**Response:**
```json
{
  "success": true,
  "count": 15,
  "data": [
    {
      "_id": "...",
      "name": "Taj Mahal",
      "state": "Uttar Pradesh",
      "region": "North",
      "city": "Agra",
      "category": "Historical",
      "description": "...",
      "bestTimeToVisit": "October to March",
      "entryFee": "₹50 (Indian), ₹250 (Foreign)",
      "images": ["url1", "url2"],
      "nearbyAttractions": ["Agra Fort", "Mehtab Bagh"],
      "createdAt": "2024-01-15T10:30:00.000Z",
      "updatedAt": "2024-01-15T10:30:00.000Z"
    }
  ]
}
```

---

### 2. Get Single Place by ID
```
GET /api/places/:id
```

**Example:**
```bash
curl http://localhost:5000/api/places/507f1f77bcf86cd799439011
```

**Response:**
```json
{
  "success": true,
  "data": {
    "_id": "507f1f77bcf86cd799439011",
    "name": "Taj Mahal",
    ...
  }
}
```

---

### 3. Create a Place (Admin)
```
POST /api/places
```

**Request Body:**
```json
{
  "name": "Taj Mahal",
  "state": "Uttar Pradesh",
  "region": "North",
  "city": "Agra",
  "category": "Historical",
  "description": "Monument to love built by Mughal Emperor Shah Jahan",
  "bestTimeToVisit": "October to March",
  "entryFee": "₹50 (Indian), ₹250 (Foreign)",
  "locationLink": "https://maps.google.com/...",
  "images": ["https://example.com/image1.jpg"],
  "nearbyAttractions": ["Agra Fort", "Mehtab Bagh"]
}
```

**Example with cURL:**
```bash
curl -X POST http://localhost:5000/api/places \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Taj Mahal",
    "state": "Uttar Pradesh",
    "region": "North",
    "city": "Agra",
    "category": "Historical",
    "description": "Monument to love",
    "bestTimeToVisit": "October to March",
    "entryFee": "₹50 (Indian), ₹250 (Foreign)",
    "images": ["https://example.com/image1.jpg"],
    "nearbyAttractions": ["Agra Fort"]
  }'
```

**Response:**
```json
{
  "success": true,
  "message": "Place created successfully",
  "data": {
    "_id": "507f1f77bcf86cd799439011",
    "name": "Taj Mahal",
    ...
  }
}
```

---

### 4. Update a Place (Admin)
```
PUT /api/places/:id
```

**Request Body (send only fields to update):**
```json
{
  "description": "Updated description",
  "entryFee": "₹75"
}
```

**Example:**
```bash
curl -X PUT http://localhost:5000/api/places/507f1f77bcf86cd799439011 \
  -H "Content-Type: application/json" \
  -d '{
    "description": "Updated description",
    "entryFee": "₹75"
  }'
```

**Response:**
```json
{
  "success": true,
  "message": "Place updated successfully",
  "data": { ... }
}
```

---

### 5. Delete a Place (Admin)
```
DELETE /api/places/:id
```

**Example:**
```bash
curl -X DELETE http://localhost:5000/api/places/507f1f77bcf86cd799439011
```

**Response:**
```json
{
  "success": true,
  "message": "Place deleted successfully",
  "data": { ... }
}
```

---

## 📊 Testing with Postman

### Import Postman Collection:
Create a new collection and add the endpoints:

1. **Get All Places**
   - Method: GET
   - URL: `{{base_url}}/api/places`
   - Params: `region`, `category`, `state`, `search`

2. **Get Place by ID**
   - Method: GET
   - URL: `{{base_url}}/api/places/:id`

3. **Create Place**
   - Method: POST
   - URL: `{{base_url}}/api/places`
   - Body (JSON): Place object

4. **Update Place**
   - Method: PUT
   - URL: `{{base_url}}/api/places/:id`
   - Body (JSON): Fields to update

5. **Delete Place**
   - Method: DELETE
   - URL: `{{base_url}}/api/places/:id`

Set Postman variable: `base_url = http://localhost:5000`

---

## ✅ Health Check

```bash
curl http://localhost:5000/health
```

Response:
```json
{
  "status": "✅ Server is running",
  "timestamp": "2024-01-15T10:30:00.000Z"
}
```

---

## 🔐 MongoDB Atlas Setup Guide

1. **Create Account:** [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. **Create Cluster:** 
   - Choose free tier
   - Select region closest to you
   - Create cluster
3. **Create Database User:**
   - Go to "Database Access"
   - Add new user with password
   - Remember username and password
4. **Allow Connections:**
   - Go to "Network Access"
   - Add IP address (or allow all: `0.0.0.0/0`)
5. **Get Connection String:**
   - Click "Connect" on your cluster
   - Choose "MongoDB for VS Code"
   - Copy connection string
   - Replace `<username>`, `<password>`, `<appname>` with your details

**Example Connection String:**
```
mongodb+srv://travelbharat:MyPassword123@cluster0.mongodb.net/travel_bharat?retryWrites=true&w=majority
```

---

## 📦 Dependencies

- **express** - Web framework
- **mongoose** - MongoDB object modeling
- **dotenv** - Environment variable management
- **cors** - Cross-Origin Resource Sharing
- **nodemon** - Auto-reload during development (dev only)

---

## 🚀 Production Setup

### Steps for deploying on Heroku/Railway/Render:

1. **Create Procfile:**
   ```
   web: node server.js
   ```

2. **Set environment variables on your hosting platform:**
   ```
   MONGO_URI=your_mongodb_uri
   PORT=your_port
   CORS_ORIGIN=your_frontend_url
   ```

3. **Deploy:**
   ```bash
   # For Heroku
   heroku create your-app-name
   git push heroku main
   ```

---

## 🔮 Future Enhancements

- ✅ Authentication (JWT)
- ✅ User reviews and ratings
- ✅ Image upload functionality
- ✅ Advanced filtering and search
- ✅ Email notifications
- ✅ API rate limiting
- ✅ Logging and monitoring

---

## 📝 Error Handling

All endpoints return consistent error responses:

```json
{
  "success": false,
  "error": "Error message here"
}
```

Common HTTP Status Codes:
- `200` - Success
- `201` - Created
- `400` - Bad Request
- `404` - Not Found
- `500` - Server Error

---

## 🤝 Contributing

To add new features:
1. Create a new controller function
2. Add routes
3. Test with Postman
4. Update this README

---

## 📞 Support

For issues or questions, check:
- MongoDB Atlas Documentation: https://docs.atlas.mongodb.com/
- Express Documentation: https://expressjs.com/
- Mongoose Documentation: https://mongoosejs.com/

---

## 📄 License

ISC License - Feel free to use and modify

---

**Happy Coding! 🚀** Build amazing tourism experiences with Travel Bharat!
