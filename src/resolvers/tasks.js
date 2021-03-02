export default {
  Query: {
    allTasks: async (parent, args, { models }) => {
      const tasks = await models.Task.find();
      return tasks.map((x) => {
        x._id = x._id.toString();
        return x;
      });
    },
    task: async (parent, args, { models }) => {
      const task = await models.Task.findById(args._id);
      task._id = task._id.toString();
      return task;
    },
  },
  Mutation: {
    createTask: async (parent, args, { models }) => {
      const task = await new Task(args).save();
      task._id = task._id.toString();
      return task;
    },
    updateTask: async (parent, args, { models }) => {
      let task = await models.Task.findById(args._id);

      task.name = args.name;
      task.description = args.description;
      task.complete = args.complete;

      task.save();

      return task;
    },
    deleteTask: async (parent, args, { models }) => {
      return await models.Task.findByIdAndDelete(args._id);
    },
  },
};
