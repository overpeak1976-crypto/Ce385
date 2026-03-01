import express from 'express';
import { prisma } from './lib/prisma';

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello from Prisma API!')
});

app.post('/user', async (req,res) => {
    const { name, email } = req.body;
    try {
        const user = await prisma.user.create({
            data: { name, email },
        });
        res.status(201).json(user);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to create user'});
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

//get all users
app.get('/users', async (req, res) => {
    try {
        const users = await prisma.user.findMany();
        res.json(users);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to fetch users'});
    }
});

app.put('/user/:id', async (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;
    try {
        const user = await prisma.user.update({
            where: { Userid: id },
            data: { name, email },
        });
        res.json(user);
    }
    catch (error) {
        res.status(500).json({ error: 'Faild to update user '});
    }
})

//////. API ตาราง (User). //////

// GET /users/email/:email
app.get('/users/email/:email', async (req, res) => {
    const { email } = req.params;

    try {
        const user = await prisma.user.findUnique({
            where: { email: email },
        });

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.json(user);
    }
    catch (error) {
        res.status(500).json({ error: "Failed to fetch user" });
    }
});

//DELETE /users/:id
app.delete('/users/:id', async (req, res) => {
    const { id } = req.params;

    try {
        await prisma.user.delete({
            where: { Userid: id }
        });

        res.json({ message: "User deleted successfully" });
    }
    catch (error) {
        res.status(500).json({ error: "Failed to delete user" });
    }
});


//////. API ตาราง (Post). //////

//POST /posts
app.post('/posts', async (req, res) => {
    const { title, content, authorId } = req.body;

    try {
        const post = await prisma.post.create({
            data: {
                title,
                content,
                authorId
            }
        });

        res.status(201).json(post);
    } catch (error) {
        res.status(500).json({ error: "Failed to create post" });
    }
});

//GET /posts
app.get('/posts', async (req, res) => {
    try {
        const posts = await prisma.post.findMany();
        res.json(posts);
    }
    catch (error) {
        res.status(500).json({ error: "Failed to fetch posts" });
    }
});

//GET /posts/:id
app.get('/posts/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const post = await prisma.post.findUnique({
            where: { postId: id },
        });

        if (!post) {
            return res.status(404).json({ message: "Post not found" });
        }

        res.json(post);
    }
    catch (error) {
        res.status(500).json({ error: "Failed to fetch post" });
    }
});

//PUT /posts/:id
app.put('/posts/:id', async (req, res) => {
    const { id } = req.params;
    const { title, content } = req.body;

    try {
        const post = await prisma.post.update({
            where: { postId: id },
            data: { title, content }
        });

        res.json(post);
    }
    catch (error) {
        res.status(500).json({ error: "Failed to update post" });
    }
});

//DELETE /posts/:id
app.delete('/posts/:id', async (req, res) => {
    const { id } = req.params;

    try {
        await prisma.post.delete({
            where: { postId: id },
        });

        res.json({ message: "Post deleted successfully" });
    }
    catch (error) {
        res.status(500).json({ error: "Failed to delete post" });
    }
});