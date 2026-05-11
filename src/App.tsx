import { Fragment } from 'react'
import Commands from './components/Commands'
import ExperiencesList from './components/ExperiencesList'

export default function App() {
  return (
    <>
      <Commands />
      <div className="p-10 max-sm:p-4 max-w-[900px] mx-auto max-sm:max-w-full">
        <header className="flex max-sm:flex-col justify-between items-start max-sm:gap-3 pb-8 border-b border-neutral-800 dark:border-[#dcdcdc]">
          <div>
            <div className="text-[40px] max-sm:text-[28px] font-semibold tracking-[5px] max-sm:tracking-[3px]">THỐNG NGUYỄN</div>
            <div className="tracking-[2px] max-sm:text-sm">SOFTWARE ENGINEER</div>
          </div>
          <div className="text-right max-sm:text-left text-[13px]">
            <div><a href="tel:84988195159" className="text-inherit no-underline">+84 988 195 159</a></div>
            <div><a href="mailto:thong.nguyencao.vn@gmail.com" className="text-inherit no-underline">thong.nguyencao.vn@gmail.com</a></div>
          </div>
        </header>

        <span className="relative -top-5 text-[75%] opacity-50">
          Have learned something new everyday since 1995
        </span>

        <section className="py-8">
          <h2 className="text-[22px] font-semibold tracking-[2px] mb-6">EXPERIENCES</h2>
          <ExperiencesList items={[
            {
              id: '6',
              name: 'Employment Hero',
              time: '2023 - 2026',
              content: (
                <Fragment>
                  <p><b className="job-title">Full Stack Engineer</b></p>
                  <li>Built InstaPay, an Earned Wage Access product giving employees on-demand access to wages before payday.</li>
                  <li>Developed HeroClear, an embedded superannuation clearing house automating Payday Super compliance via NPP/PayTo rails.</li>
                  <li>Delivered mobile experiences with <b>React Native</b> and web portals with <b>React</b> + <b>GraphQL</b>.</li>
                  <p className="text-[85%] opacity-50"><span>AI is the new deal. Engineers never stop learning — but now we learn faster to control AI.</span></p>
                </Fragment>
              ),
            },
            {
              id: '5',
              name: 'ZaloPay',
              time: '2021 - 2023',
              content: (
                <Fragment>
                  <p><b className="job-title">React Native Engineer</b></p>
                  <li>Lead the front end group of the Finance Services team.</li>
                  <li>We thrived although got locked with an old version of the framework.</li>
                  <p className="text-[85%] opacity-50"><span>Prefer strong company culture over processes, and promote "less is more" spirit.</span></p>
                </Fragment>
              ),
            },
            {
              id: '4',
              name: 'Infina',
              time: '2020 - 2021',
              content: (
                <Fragment>
                  <p><b className="job-title">React Native Engineer</b></p>
                  <li>Build the Infina mobile app.</li>
                  <li>Develop a strong team of <b>React Native</b> developers.</li>
                  <li>Maintain team processes to efficiently work under pressure.</li>
                  <p className="text-[85%] opacity-50"><span>Chaos is better managed than being taken as an excuse.</span></p>
                </Fragment>
              ),
            },
            {
              id: '3',
              name: 'Minito',
              time: '2018 - 2020',
              content: (
                <Fragment>
                  <p><b className="job-title">React Engineer</b></p>
                  <li>Participate in the conceptual design of the Minito system.</li>
                  <li>Develop the web app with <b>React</b>.</li>
                  <li>Consulted the client on applying <b>Agile methodologies</b>.</li>
                  <p className="text-[85%] opacity-50"><span>We will always know if something can be done or not.</span></p>
                </Fragment>
              ),
            },
            {
              id: '2',
              name: <a href="https://realstake.net/" target="_blank" rel="noopener noreferrer" className="text-inherit no-underline">RealStake</a>,
              time: '2018 - 2020',
              content: (
                <Fragment>
                  <p><b className="job-title">React Engineer</b></p>
                  <li>Maintained the web app of RealStake using <b>React</b>.</li>
                  <li>Worked with the product team to assess technical feasibility.</li>
                  <li>Consulted on applying <b>Extreme Programming</b> to the client&apos;s team in order to deliver within tight deadline while still keep the developers happy.</li>
                  <p className="text-[85%] opacity-50"><span>A friendly and professional working environment has huge benefit on both personal and business development.</span></p>
                </Fragment>
              ),
            },
             {
               id: '1',
               name: 'Swememo',
               time: '2016 - 2018',
               content: (
                 <Fragment>
                   <p><b className="job-title">Full Stack Engineer</b></p>
                   <li>Lead the development of Swememo&apos;s web application.</li>
                   <li>Built and maintained a <b>Ruby on Rails</b> team.</li>
                   <li>Learned various skills related to a product&apos;s lifecycle.</li>
                    <p className="text-[85%] opacity-50"><span>Together we brought Swememo to Echelon Asia Summit 2018 in Singapore.<a href="https://vov.vn/khoi-nghiep/5-startup-viet-vao-top-100-chau-a-641529.vov" target="_blank" rel="noopener noreferrer" className="text-inherit"><sup className="text-[70%] border-b border-current">(1)</sup></a></span></p>
                 </Fragment>
               ),
             },
            {
              id: '0',
              name: 'East Agile',
              time: '2016',
              content: (
                <Fragment>
                  <p><b className="job-title">Full Stack Engineer</b></p>
                  <li>Developed a client projects under supervision of one of EA&apos;s project managers.</li>
                  <li>Learned <b>TDD</b>, <b>BDD</b>, <b>Extreme Programming</b> and started my career with <b>Ruby on Rails</b>.</li>
                  <p className="text-[85%] opacity-50"><span>Testing is a must, or we actually don&apos;t care at all about our product.</span></p>
                </Fragment>
              ),
            },
          ]} />
        </section>

         <section className="py-8 border-t border-gray-400/50 dark:border-neutral-600/50">
           <h2 className="text-[22px] font-semibold tracking-[2px] mb-6">EDUCATION, TRAINING &amp; AWARD</h2>
           <ExperiencesList hasContent={false} items={[
             {
               id: '1',
               name: <a href="https://hcmuni.fpt.edu.vn/" target="_blank" rel="noopener noreferrer" className="text-inherit no-underline">FPT University</a>,
               time: '2018',
             },
             {
               id: '3',
               name: <a href="https://daihoc.fpt.edu.vn/doi-apidez-gianh-giai-nhat-cuoc-thi-lap-trinh-ung-dung-android/" target="_blank" rel="noopener noreferrer" className="text-inherit no-underline">FPT&apos;s Android Application Programming Contest - First Prize</a>,
               time: '2016',
             },
             {
               id: '0',
               name: 'Vietnam Olympiad in Informatics - Bronze Medal',
               time: '2013',
             },
           ]} />
         </section>

         <section className="py-8 border-t border-gray-400/50 dark:border-neutral-600/50">
           <h2 className="text-[22px] font-semibold tracking-[2px] mb-6">REFERENCES</h2>
           <ul className="text-[85%] resume-content">
             <li className="mb-2">(1) 5 startup Việt vào Top 100 châu Á: <a href="https://vov.vn/khoi-nghiep/5-startup-viet-vao-top-100-chau-a-641529.vov" target="_blank" rel="noopener noreferrer" className="text-inherit underline">https://vov.vn/khoi-nghiep/5-startup-viet-vao-top-100-chau-a-641529.vov</a></li>
           </ul>
         </section>
       </div>
    </>
  )
}
