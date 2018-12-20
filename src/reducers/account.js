var initialState = {
    name: "Sarah Cruiz",
    job: "Web Programmer",
    avatar: "/images/users/user-1.jpg",
    followers: 100,
    following: 150,
    infomation: "I'm a full-stack web developer and I want to improve my skills",
    overbalance: "70000TRE",
    location: "227 Nguyen Van Cu St, District 5",
}

const account = (state = initialState, action) => {
    switch(action.type){
        default: return state;
    }
};

export default account;