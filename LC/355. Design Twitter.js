
class Twitter {
    constructor() {
        this.tweets = []
        this.following = {}
        this.time=0
    }

    postTweet(userId, tweetId) {
        this.following[userId] ? this.following[userId].add(userId) : this.following[userId] = new Set([userId])
        this.tweets.push({ "userId": userId, "time":++this.time, "tweetId": tweetId })
    }

    getNewsFeed(userId) {
        let feed = this.tweets.filter(x=>this.following[userId]?.has(x.userId))
        .sort((a,b)=>b.time-a.time).map(x=>x.tweetId)
        .slice(0,10)
        return feed
    }

    follow(followerId, followeeId) {
        if (this.following[followerId] != undefined) {
            this.following[followerId].add(followeeId)
        } else {
            this.following[followerId] = new Set([followeeId])
        }

    }

    unfollow(followerId, followeeId) {
        this.following[followerId].delete(followeeId)
    }
};


/** 
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */
// 355. Design Twitter