import { Context } from '../context'

const User = {
  async posts(parent: any, args: any, ctx: Context) {
    return await ctx.prisma.posts.findMany({
      where: {
        author: parent.id,
      },
    })
  },

  email(parent: any) {
    return parent.email
  },
}

export default User
