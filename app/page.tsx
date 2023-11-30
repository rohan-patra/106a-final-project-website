export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">EE106A Final Project</h1>
        <h3 className="text-lg leading-tight tracking-tight md:text-2xl">
          For our final project, we decided to use the Turtlebots to build a robot that can search for objects and plan
          and execute a path to the objects. In reality, this would demonstrate its ability to perform search and rescue
          operations autonomously.
        </h3>
      </div>
    </section>
  )
}
