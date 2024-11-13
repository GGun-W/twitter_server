let users = [
    {
        id: '1',
        username: 'apple',
        password: '$2b$10$GYkQ3uZPMq.exD2UDiYiz.PAWT3epdHauxnIgPFVKNToO7MKqXmrC',
        name: '김사과',
        email: 'apple@apple.com',
        url:'https://img.freepik.com/premium-photo/ai-generative-high-quality-photo-happy-dog-playing-ball-grass_786887-1240.jpg'
    },
    {
        id: '2',
        username: 'banana',
        password: '$2b$10$QAu1Mzok/pU2AXOmGxwc8e8vyosKpcNwdumiOrXlWuBH9dQmcRMS6',
        name: '반하나',
        email: 'banana@banana.com',
        url:'https://img.freepik.com/premium-photo/ai-generative-high-quality-photo-happy-dog-playing-ball-grass_786887-1240.jpg'
    },
    {
        id: '3',
        username: 'orange',
        password: '$2b$10$MtFiFtVtr35X.P2w3sAVO.hdAocDD/zO3vJ3gVLpDdIsUE6lfML2G',
        name: '오렌지',
        email: 'orange@orange.com',
        url:'https://img.freepik.com/premium-photo/ai-generative-high-quality-photo-happy-dog-playing-ball-grass_786887-1240.jpg'
    }
]

export async function createUser(username, password, name, email){
    const user = {
        id: '4',
        username,
        password,
        name,
        email,
        url:'https://img.freepik.com/premium-photo/ai-generative-high-quality-photo-happy-dog-playing-ball-grass_786887-1240.jpg'
    }
    users = [user, ...users]
    return user
}

export async function findByUsername(username){
    const user = users.find((user) => user.username === username)
    return user
}

export async function findById(id){
    return users.find((user) => user.id === id)
}