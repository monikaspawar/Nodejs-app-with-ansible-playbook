const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Home page
app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Node.js App - Deployed with Ansible</title>
            <style>
                body { font-family: Arial, sans-serif; margin: 0; padding: 20px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); }
                .container { max-width: 900px; margin: 0 auto; background: white; padding: 40px; border-radius: 15px; box-shadow: 0 10px 30px rgba(0,0,0,0.2); }
                h1 { color: #333; text-align: center; margin-bottom: 30px; font-size: 2.5em; }
                .info { background: #e8f5e8; padding: 20px; border-radius: 10px; margin: 20px 0; border-left: 5px solid #28a745; }
                .nav { text-align: center; margin: 30px 0; }
                .nav a { display: inline-block; margin: 0 15px; padding: 12px 24px; background: #007bff; color: white; text-decoration: none; border-radius: 25px; transition: all 0.3s; }
                .nav a:hover { background: #0056b3; transform: translateY(-2px); }
                .features { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin: 30px 0; }
                .feature { background: #f8f9fa; padding: 20px; border-radius: 10px; text-align: center; }
                .feature h3 { color: #495057; margin-bottom: 10px; }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>🚀 Node.js Application</h1>
                <div class="info">
                    <h3>✅ Successfully Deployed with Ansible!</h3>
                    <p><strong>🕒 Server Time:</strong> ${new Date().toLocaleString()}</p>
                    <p><strong>⚡ Node.js Version:</strong> ${process.version}</p>
                    <p><strong>⏱️ Uptime:</strong> ${Math.floor(process.uptime())} seconds</p>
                    <p><strong>💾 Memory Usage:</strong> ${Math.round(process.memoryUsage().heapUsed / 1024 / 1024)} MB</p>
                </div>
                
                <div class="features">
                    <div class="feature">
                        <h3>🔧 Automated Deployment</h3>
                        <p>Deployed using Ansible automation for consistent and reliable deployments.</p>
                    </div>
                    <div class="feature">
                        <h3>📊 Real-time Monitoring</h3>
                        <p>Built-in health checks and status monitoring for application reliability.</p>
                    </div>
                    <div class="feature">
                        <h3>🌐 RESTful APIs</h3>
                        <p>Comprehensive API endpoints for integration and monitoring purposes.</p>
                    </div>
                </div>
                
                <div class="nav">
                    <a href="/about">About</a>
                    <a href="/api/status">API Status</a>
                    <a href="/api/health">Health Check</a>
                    <a href="/contact">Contact</a>
                    <a href="/dashboard">Dashboard</a>
                </div>
            </div>
        </body>
        </html>
    `);
});

// About page
app.get('/about', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>About - Node.js App</title>
            <style>
                body { font-family: Arial, sans-serif; margin: 0; padding: 20px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); }
                .container { max-width: 800px; margin: 0 auto; background: white; padding: 40px; border-radius: 15px; box-shadow: 0 10px 30px rgba(0,0,0,0.2); }
                h1 { color: #333; text-align: center; }
                .back { margin: 20px 0; text-align: center; }
                .back a { display: inline-block; padding: 10px 20px; background: #6c757d; color: white; text-decoration: none; border-radius: 5px; }
                .tech-stack { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px; margin: 20px 0; }
                .tech { background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center; }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>📋 About This Application</h1>
                <p><strong>Application:</strong> Node.js Ansible Deployment Demo</p>
                <p><strong>Version:</strong> 2.0.0</p>
                <p><strong>Author:</strong> Monika Pawar</p>
                <p><strong>Description:</strong> This is an enhanced Node.js application deployed using Ansible automation with modern web features.</p>
                
                <h3>🛠️ Technology Stack</h3>
                <div class="tech-stack">
                    <div class="tech">
                        <h4>Backend</h4>
                        <p>Node.js + Express.js</p>
                    </div>
                    <div class="tech">
                        <h4>Deployment</h4>
                        <p>Ansible Automation</p>
                    </div>
                    <div class="tech">
                        <h4>Infrastructure</h4>
                        <p>AWS EC2</p>
                    </div>
                    <div class="tech">
                        <h4>Monitoring</h4>
                        <p>Built-in Health Checks</p>
                    </div>
                </div>
                
                <h3>✨ Features</h3>
                <ul>
                    <li>Express.js web framework</li>
                    <li>RESTful API endpoints</li>
                    <li>Real-time health monitoring</li>
                    <li>Automated deployment with Ansible</li>
                    <li>Responsive web design</li>
                    <li>Contact form functionality</li>
                    <li>System dashboard</li>
                </ul>
                
                <div class="back">
                    <a href="/">← Back to Home</a>
                </div>
            </div>
        </body>
        </html>
    `);
});

// Dashboard page
app.get('/dashboard', (req, res) => {
    const memUsage = process.memoryUsage();
    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Dashboard - Node.js App</title>
            <style>
                body { font-family: Arial, sans-serif; margin: 0; padding: 20px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); }
                .container { max-width: 1000px; margin: 0 auto; background: white; padding: 40px; border-radius: 15px; box-shadow: 0 10px 30px rgba(0,0,0,0.2); }
                h1 { color: #333; text-align: center; }
                .metrics { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin: 30px 0; }
                .metric { background: #f8f9fa; padding: 20px; border-radius: 10px; text-align: center; border-left: 5px solid #007bff; }
                .metric h3 { color: #495057; margin: 0 0 10px 0; }
                .metric .value { font-size: 2em; font-weight: bold; color: #007bff; }
                .back { margin: 20px 0; text-align: center; }
                .back a { display: inline-block; padding: 10px 20px; background: #6c757d; color: white; text-decoration: none; border-radius: 5px; }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>📊 System Dashboard</h1>
                
                <div class="metrics">
                    <div class="metric">
                        <h3>⏱️ Uptime</h3>
                        <div class="value">${Math.floor(process.uptime())}s</div>
                    </div>
                    <div class="metric">
                        <h3>💾 Memory (Heap)</h3>
                        <div class="value">${Math.round(memUsage.heapUsed / 1024 / 1024)}MB</div>
                    </div>
                    <div class="metric">
                        <h3>📈 Total Memory</h3>
                        <div class="value">${Math.round(memUsage.rss / 1024 / 1024)}MB</div>
                    </div>
                    <div class="metric">
                        <h3>🔄 Node Version</h3>
                        <div class="value">${process.version}</div>
                    </div>
                </div>
                
                <h3>🖥️ System Information</h3>
                <p><strong>Platform:</strong> ${process.platform}</p>
                <p><strong>Architecture:</strong> ${process.arch}</p>
                <p><strong>PID:</strong> ${process.pid}</p>
                <p><strong>Current Time:</strong> ${new Date().toLocaleString()}</p>
                
                <div class="back">
                    <a href="/">← Back to Home</a>
                </div>
            </div>
        </body>
        </html>
    `);
});

// Contact page
app.get('/contact', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Contact - Node.js App</title>
            <style>
                body { font-family: Arial, sans-serif; margin: 0; padding: 20px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); }
                .container { max-width: 600px; margin: 0 auto; background: white; padding: 40px; border-radius: 15px; box-shadow: 0 10px 30px rgba(0,0,0,0.2); }
                h1 { color: #333; text-align: center; }
                form { margin: 20px 0; }
                input, textarea { width: 100%; padding: 12px; margin: 10px 0; border: 2px solid #ddd; border-radius: 8px; font-size: 16px; }
                input:focus, textarea:focus { border-color: #007bff; outline: none; }
                button { width: 100%; background: #007bff; color: white; padding: 15px; border: none; border-radius: 8px; cursor: pointer; font-size: 16px; }
                button:hover { background: #0056b3; }
                .back { margin: 20px 0; text-align: center; }
                .back a { display: inline-block; padding: 10px 20px; background: #6c757d; color: white; text-decoration: none; border-radius: 5px; }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>📧 Contact Us</h1>
                <p>Get in touch with us using the form below:</p>
                
                <form action="/contact" method="POST">
                    <input type="text" name="name" placeholder="Your Name" required>
                    <input type="email" name="email" placeholder="Your Email" required>
                    <input type="text" name="subject" placeholder="Subject" required>
                    <textarea name="message" placeholder="Your Message" rows="6" required></textarea>
                    <button type="submit">Send Message</button>
                </form>
                
                <div class="back">
                    <a href="/">← Back to Home</a>
                </div>
            </div>
        </body>
        </html>
    `);
});

// API endpoints
app.get('/api/status', (req, res) => {
    res.json({
        status: 'running',
        uptime: process.uptime(),
        timestamp: new Date().toISOString(),
        version: process.version,
        environment: process.env.NODE_ENV || 'production',
        memory: process.memoryUsage(),
        platform: process.platform,
        arch: process.arch,
        pid: process.pid
    });
});

app.get('/api/health', (req, res) => {
    const memUsage = process.memoryUsage();
    const uptime = process.uptime();
    
    res.json({
        health: 'OK',
        status: 'healthy',
        checks: {
            server: 'running',
            memory: memUsage.heapUsed < 100 * 1024 * 1024 ? 'normal' : 'high',
            uptime: uptime > 60 ? 'stable' : 'starting'
        },
        metrics: {
            uptime: uptime,
            memory: memUsage,
            timestamp: new Date().toISOString()
        }
    });
});

// Handle contact form submission
app.post('/contact', (req, res) => {
    const { name, email, subject, message } = req.body;
    console.log('Contact form submission:', { name, email, subject, message });
    
    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Thank You - Node.js App</title>
            <style>
                body { font-family: Arial, sans-serif; margin: 0; padding: 20px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); }
                .container { max-width: 600px; margin: 0 auto; background: white; padding: 40px; border-radius: 15px; box-shadow: 0 10px 30px rgba(0,0,0,0.2); text-align: center; }
                .success { background: #d4edda; color: #155724; padding: 20px; border-radius: 10px; margin: 20px 0; border-left: 5px solid #28a745; }
                .back a { display: inline-block; padding: 10px 20px; background: #007bff; color: white; text-decoration: none; border-radius: 5px; margin-top: 20px; }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>✅ Thank You!</h1>
                <div class="success">
                    <h3>Message Received Successfully!</h3>
                    <p>Thank you for contacting us, <strong>${name}</strong>!</p>
                    <p>We have received your message about "<strong>${subject}</strong>" and will get back to you at <strong>${email}</strong> soon.</p>
                </div>
                <div class="back">
                    <a href="/">← Back to Home</a>
                </div>
            </div>
        </body>
        </html>
    `);
});

// 404 handler
app.use((req, res) => {
    res.status(404).send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>404 - Page Not Found</title>
            <style>
                body { font-family: Arial, sans-serif; margin: 0; padding: 20px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); }
                .container { max-width: 600px; margin: 0 auto; background: white; padding: 40px; border-radius: 15px; box-shadow: 0 10px 30px rgba(0,0,0,0.2); text-align: center; }
                h1 { color: #dc3545; font-size: 4em; margin: 0; }
                .back a { display: inline-block; padding: 15px 30px; background: #007bff; color: white; text-decoration: none; border-radius: 25px; margin-top: 20px; }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>404</h1>
                <h2>Page Not Found</h2>
                <p>The page you're looking for doesn't exist.</p>
                <div class="back">
                    <a href="/">← Back to Home</a>
                </div>
            </div>
        </body>
        </html>
    `);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 Server running on port ${PORT}`);
    console.log(`🌐 Access at: http://localhost:${PORT}`);
    console.log(`📊 Dashboard: http://localhost:${PORT}/dashboard`);
});