import {MongoClient, ObjectId} from 'mongodb'
import express from 'express'
import bodyParser from 'body-parser'
import {graphqlExpress, graphiqlExpress} from 'graphql-server-express'
import {makeExecutableSchema} from 'graphql-tools'
import cors from 'cors'

const URL = 'http://localhost'
const PORT = 3001
const MONGO_URL = 'mongodb://localhost:27017/blog'

const prepare = (o) => {
  o._id = o._id.toString()
  return o
}

export const start = async () => {
  try {
    const db = await MongoClient.connect(MONGO_URL)

    const Posts = db.collection('posts')
    const Comments = db.collection('comments')
	const UserTable = db.collection('usertable')
	const JobList = db.collection('joblist')
	const AppliedJob = db.collection('appliedJob')
	

    const typeDefs = [`
      type Query {
        post(_id: String): Post
        posts: [Post]
		users : [UserTable]
        comment(_id: String): Comment
		usertable(_id: String): UserTable
		getJobs: [JobList]
		getAppliedJobs : [AppliedJob]
      }
	  type UserTable {
		_id: String
        userId: String
        password: String
		name: String
      
      }
	  
	   type JobList {
		_id: String
        jobId: String
        position: String
		skills: String
		hiringManager: String
		date: String
		schedule: String
      
      }
	  
	   type AppliedJob {
		_id: String
        jobId: String
       userId: String
      
      }
	  
	  
      type Post {
        _id: String
        title: String
        content: String
        comments: [Comment]
      }
      type Comment {
        
        postId: String
        content: String
        post: Post
      }
      type Mutation {
        createPost(title: String, content: String): Post
        createComment(postId: String, content: String): Comment
		createUserTable(userId: String, password: String, name: String): UserTable
		createJob(jobId: String, position: String, skills: String,hiringManager: String,date: String,schedule: String): JobList
		
		createAppliedJob(userId: String, jobId: String): AppliedJob
      }
      schema {
        query: Query
        mutation: Mutation
      }
    `];

    const resolvers = {
      Query: {
        post: async (root, {_id}) => {
          return prepare(await Posts.findOne(ObjectId(_id)))
        },
        posts: async () => {
          return (await Posts.find({}).toArray()).map(prepare)
        },
		users: async () => {
          return (await UserTable.find({}).toArray()).map(prepare)
        },
		getJobs: async () => {
          return (await JobList.find({}).toArray()).map(prepare)
        },
		getAppliedJobs: async () => {
          return (await AppliedJob.find({}).toArray()).map(prepare)
        },
        comment: async (root, {_id}) => {
          return prepare(await Comments.findOne(ObjectId(_id)))
        },
		 usertable: async (root, {_id}) => {
          return prepare(await UserTable.findOne(ObjectId(_id)))
        },
      },
      Post: {
        comments: async ({_id}) => {
          return (await Comments.find({postId: _id}).toArray()).map(prepare)
        }
      },
      Comment: {
        post: async ({postId}) => {
          return prepare(await Posts.findOne(ObjectId(postId)))
        }
      },

	  
      Mutation: {
        createPost: async (root, args, context, info) => {
          const res = await Posts.insert(args)
          return prepare(await Posts.findOne({_id: res.insertedIds[1]}))
        },
        createComment: async (root, args) => {
          const res = await Comments.insert(args)
          return prepare(await Comments.findOne({_id: res.insertedIds[1]}))
        },
		 createUserTable: async (root, args) => {
          const res = await UserTable.insert(args)
          return prepare(await UserTable.findOne({_id: res.insertedIds[1]}))
        },
		createJob: async (root, args) => {
          const res = await JobList.insert(args)
          return prepare(await JobList.findOne({_id: res.insertedIds[1]}))
        },
		createAppliedJob: async (root, args) => {
          const res = await AppliedJob.insert(args)
          return prepare(await AppliedJob.findOne({_id: res.insertedIds[1]}))
        },
      },
    }

    const schema = makeExecutableSchema({
      typeDefs,
      resolvers
    })

    const app = express()

    app.use(cors())

    app.use('/graphql', bodyParser.json(), graphqlExpress({schema}))

    const homePath = '/graphiql'

    app.use(homePath, graphiqlExpress({
      endpointURL: '/graphql'
    }))

    app.listen(PORT, () => {
      console.log(`Visit ${URL}:${PORT}${homePath}`)
    })

  } catch (e) {
    console.log(e)
  }

}