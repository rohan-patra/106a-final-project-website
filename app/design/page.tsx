export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">Design</h1>
        <h2><Design Requirements</h2>
        <h3 className="text-lg leading-tight tracking-tight md:text-2xl">
          <ul style="list-style-type:disc;">
            
            <li>Detection Capability:
              <ul style="list-style-type:square;"> 
                <li>Ability to detect objects at a min distance of 2 feet.
              </ul>
            </li>
            
            <li>Autonomous Navigation and Exploration: 
              <ul style="list-style-type:square;">  
                <li>Navigate independently through the environment.</li>
                <li>Systematically map the unknown area during exploration.</li>
              </ul>
            </li>

            <li>Object Detection:
              <ul style="list-style-type:square;">  
                <li>Upon detecting the object of interest, cease exploration and navigate towards the object. </li>
                <li>If the object is not found after a complete exploration, activate a signal to indicate its absence.</li>
              </ul>
            </li>
            
            <li>Obstacle Management:
              <ul style="list-style-type:square;">  
                <li>Efficiently navigate around obstacles, avoiding collisions with objects or walls.</li>
              </ul>
            </li>
          
          </ul>

        </h3>
      </div>
    </section>
  )
}
