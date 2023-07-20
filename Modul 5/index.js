import express from "express";
import users from  "./users.json" assert { type: "json" };

const app = express();

    app.get("/users", (req,res) => {
        const {name} = req.query;
        let data = [];
        
    })

    app.get("/",(req,res)=>{
        res.json({
            data:"GET REQUEST"
        });
    });

    app.post("/",(req,res)=>{
    res.json({
        data:"Post REQUEST"
    });
});

    app.put("/",(req,res)=>{
        res.json({
            data:"Put REQUEST"
        });
    });

    app.delete("/",(req,res)=>{
        res.json({
            data:"Delete REQUEST"
        });
    });

    app.get("/user/:id", (req,res) =>{
        const id = req.params.id;

        const user = users.filter((user) => user.id === Number(id));

        if (user.length === 0){
            return res.status(404).json({
                message: "User not found",
            }); 
        }

        res.json({
            data: user,
        });
    })

app.listen(3000, () => {
    console.log(`Server running on port 3000`);
});

