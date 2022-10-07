
import './App.css';
import {Collapse, Typography, Button, List} from "antd"
import { Link } from '@mui/material';

function App() {
  return (
    <div className="App">
      

      <div className='App-Holder'>
        <Collapse accordion={false}> 
        <Collapse.Panel header= {<h3 className= 'COLLAPSE-PANEL-HEADER'>TECHNOLOGY</h3>}>
          <div className= 'GRID-MAIN'>



            <div className='Work-Experience-Grid_1'>
                <div className='projects_title_holder_1'><h3>FRONTEND DEVELOPER</h3></div>   
                <div className='projects_title_holder_2'><h4><Link>DESIGNLAB.PFBD</Link> _ LONDON, UK</h4></div> 
                <div className='projects_title_holder_3'><p>A sustainability focused design agency and e-commerce platform, focused on carbon offsetting through technology and responsible wholesale.<br></br>
                                                   <bold>Part of the _PFBD_ ecosystem.</bold></p></div>
                <div className='projects_title_holder_4'><h4>ACHIEVEMENTS AND RESPONSIBILITIES</h4></div>
                <div className='projects_title_holder_5'>
                    <ul className= 'BULLETS'>
                      <li> sdljdshjcs</li>
                      <li> sdljdshjcs</li>
                      <li> sdljdshjcs</li>           
                    </ul>
                    <div className='TECH-STACK'><h4>TECH-STACK: AUTODESK_360, REVIT, DYNAMO, EXCEL, AUTOCAD, RHINO, INDESIGN</h4></div>  
                </div>                                 
            </div>




            <div className='Work-Experience-Grid_2'>
                <div className='projects_title_holder_1'><h3>SOFTWARE ENGINEER</h3></div>
                <div className='projects_title_holder_2'><h4><Link>FINANCIAL-FREEDON-CALCULATOR.APP</Link> _ LONDON, UK</h4></div>
                <div className='projects_title_holder_3'><p>A global, innovative, high-tech design firm focused on healthcare, commercial strategy, commercial interiors and sustainability.</p></div>
                <div className='projects_title_holder_4'><h4>ACHIEVEMENTS AND RESPONSIBILITIES</h4></div>
                <div className='projects_title_holder_5'>
                    <ul className= 'BULLETS'>
                      <li> sdljdshjcs</li>
                      <li> sdljdshjcs</li>
                      <li> sdljdshjcs</li>
                    </ul>
                    <div className='TECH-STACK'><h4>TECH-STACK: AUTODESK_360, REVIT, DYNAMO, EXCEL, AUTOCAD, RHINO, INDESIGN</h4></div>
                </div>    
            </div>




            <div className='Work-Experience-Grid_3'>
                <div className='projects_title_holder_1'><h3>SOFTWARE ENGINEER</h3></div>  
                <div className='projects_title_holder_2'><h4><Link>OZ-JASONS-WORLWIND-TETRIS.APP</Link> _ LONDON, UK</h4></div>  
                <div className='projects_title_holder_3'><p>A global, innovative, high-tech design firm focused on healthcare, commercial strategy, commercial interiors and sustainability.</p></div>
                <div className='projects_title_holder_4'><h4>ACHIEVEMENTS AND RESPONSIBILITIES</h4></div>
                <div className='projects_title_holder_5'>
                    <ul className= 'BULLETS'>
                      <li> sdljdshjcs</li>
                      <li> sdljdshjcs</li>
                      <li> sdljdshjcs</li>
                    </ul>
                    <div className='TECH-STACK'><h4>TECH-STACK: AUTODESK_360, REVIT, DYNAMO, EXCEL, AUTOCAD, RHINO, INDESIGN</h4></div>          
                </div>  
            </div> 
          



            <div className='Work-Experience-Grid_4'>
                <div className='projects_title_holder_1'><h3>FRONTEND DEVELOPER</h3></div>
                <div className='projects_title_holder_2'><h4><Link>OZNWACHUKWU.COM</Link> _ LONDON, UK</h4></div>
                <div className='projects_title_holder_3'><p>Oz Nwachukwu personal portfolio website</p></div>   
                <div className='projects_title_holder_4'>
                <div className='projects_title_holder_5'>
                  <ul className= 'BULLETS'>
                     <li>sdljdshjcs</li>
                     <li>sdljdshjcs</li>
                     <li>sdljdshjcs</li>
                  </ul>
                  <div className='TECH-STACK'><h4>TECH-STACK: AUTODESK_360, REVIT, DYNAMO, EXCEL, AUTOCAD, RHINO, INDESIGN</h4></div>
                </div>                
            </div>                   
            </div>
            



            <div className='Work-Experience-Grid_5'>
                <div className='projects_title_holder_1'><h3>FULLSTACK DEVELOPER</h3></div> 
                <div className='projects_title_holder_2'></div><h4><Link>PLASTICFREEBYDESIGN.COM</Link> _ LONDON, UK</h4>  
                <div className='projects_title_holder_3'></div><p>A sustainability focused design agency and e-commerce platform, focused on carbon offsetting through technology and responsible wholesale.<br></br>
                <bold>Part of the _PFBD_ ecosystem.</bold></p>  
                <div className='projects_title_holder_4'>
                <div className='projects_title_holder_5'>                   
                 <ul className= 'BULLETS'>
                   <li>sdljdshjcs</li>
                   <li>sdljdshjcs</li>
                   <li>sdljdshjcs</li>
                 </ul> 
                 <div className='TECH-STACK'><h4>TECH-STACK: HTML, CSS, JAVASCRIPT, REACT, WEBFLOW, FIGMA, AWS</h4></div>                                
                </div>                     
            </div>                 
          </div> 
          </div>  
       </Collapse.Panel> 
      </Collapse>    



      <div className='COLLAPSE-DIVIDE'> 
       <div className='BORDER'>

       </div>
      </div>


    <Collapse>
    <Collapse.Panel 
          
          header= {<h3 className= 'COLLAPSE-PANEL-HEADER'>ARCHITECTURE</h3>}
          extra={<Button>Download</Button>}>            

          
          <div className='Work-Experience-Grid'>
            <div className='projects_title_holder'><h3>TECHNICAL ARCHITECT / BIM</h3></div>
            <div className='projects_title_holder'><h4>LW DESIGN GROUP MARCH - 2021 _ DEC - 2021 DUBAI, UAE</h4></div>
            <div className='projects_title_holder'><p>Interior and architectural design firm based in the Dubai, UAE</p></div>
            <div className='projects_title_holder'><h4>ACHIEVEMENTS AND RESPONSIBILITIES</h4></div>
            <div className='projects_title_holder'>
              <ul className= 'BULLETS'>

                <li className='LIST'>High Profile hotel and serviced apartments project based in Sharja. <br></br>
                <p className='PARAGRAPH'> developed BIM models for Schematic Design, very aggresive
                                          timeframe.</p>
                </li>


                <li className='LIST'>Developed Villa BIM model for client based in Jumeirah. <br></br>
                <p className='PARAGRAPH'> External BIM model linking strategy   -Schedule of Design Coordination Meetings
                    Level of Detail against Level of Development matrix   -Folder structure,
                    model and drawing naming strategy based on BS EN ISO_9001.</p>
                </li>             
              </ul>
              <div className='TECH-STACK'><h4>TECH-STACK: AUTODESK_360, REVIT, DYNAMO, EXCEL, AUTOCAD, RHINO, INDESIGN</h4></div>

          </div>
        

          <div className='Work-Experience-Grid'>
            <div className='projects_title_holder'><h3>TECHNICAL ARCHITECT / BIM MANAGER</h3></div>
            <div className='projects_title_holder'><h4>PERKINS AND WILL _ NOV 2018 - JULY 2021 _ LONDON, UK</h4></div>
            <div className='projects_title_holder'><p>A global, innovative, high-tech design firm focused on healthcare, commercial strategy, commercial interiors and sustainability.</p></div>
            <div className='projects_title_holder'><h4>ACHIEVEMENTS AND RESPONSIBILITIES</h4></div>
            <div className='projects_title_holder'>
              <ul className= 'BULLETS'>

                <li className='LIST'>Developed automated workflows to enhance day to day project
                                     activities by creating Dynamo scripts: <br></br>
                <p className='PARAGRAPH'>- Dynamo script for sheet naming automation  -sheet drawing layout automation  -automatic grid
                    and level dimensioning  -Used Autodesk 360 to automate drawing and model issuing</p>
                </li>

                <li className='LIST'>Developed standards implemented in BIM Execution Plan: <br></br>
                <p className='PARAGRAPH'> - External BIM model linking strategy -Schedule of Design Coordination Meetings
                    Level of Detail against Level of Development matrix -Folder structure,
                    model and drawing naming strategy based on BS EN ISO_9001.</p>
                </li>


                <li className='LIST'>Developed BIM model internal and external control strategy: <br></br>
                <p className='PARAGRAPH'> - Appropriate worksets and work-sharing protocols -File sharing and BIM
                    model upload protocols to mitigate data infractions and federated BIM
                    model clashes.</p>                
                </li>


                <li className='LIST'>Developed Common Data Environment (CDE) strategy: <br></br>
                <p className='PARAGRAPH'> -Implemented cloud collaboration strategy using Autodesk BIM 360   -Data release
                    protocols including drawing upload schedule and release   -Implemented
                    shared coordinates system between disciplines based on civil engineers’ data.</p>                
                </li>


                <li className='LIST'>Direct client liaison for specialist BIM delivered lab facility: <br></br>
                <p className='PARAGRAPH'> -Developed risk matrix based on sample contamination potential   -Worked
                    with client to develop complex clean-room circulation strategy for FDA
                    approval   -Client/design team mediator, conveying complex design
                    concepts.</p>                
                </li>


                <li className='LIST'>Developed specialist equipment specification and scheduling matrix: <br></br>
                <p className='PARAGRAPH'> - Room data-sheets with specialist equipment lists, air
                    particle cleanliness, room pressure and circulation instructions   -Liaison
                    with subcontractors to specify equipment family parameters   -NBS
                    specification to export into COBie data sheets using COBie extension for
                    Revit.</p>               
                </li>

              </ul>
              <div className='TECH-STACK'><h4>TECH-STACK: AUTODESK_360, REVIT, DYNAMO, EXCEL, AUTOCAD, RHINO, INDESIGN</h4></div>
          </div>

         
         
        </div> 


        </div> 

        <div className='Work-Experience-Grid'>
            <div className='projects_title_holder'><h3>TECHNICAL ARCHITECT / BIM</h3></div>
            <div className='projects_title_holder'><h4>BENOY - 2021 _ DEC - 2021 DUBAI, UAE</h4></div>
            <div className='projects_title_holder'><p>A global commercial practice focused on workplace strategy, interiors and high end residential projects.</p></div>
            <div className='projects_title_holder'><h4>ACHIEVEMENTS AND RESPONSIBILITIES</h4></div>
            <div className='projects_title_holder'></div>

            <ul className= 'BULLETS'>

                <li className='LIST'>Development of project infrastructure leading to BIM Level 2:<br></br>
                <p className='PARAGRAPH'>-Developed project and sheet templates -Supported development of
                                          keynotes used for tagging.</p>
                </li>

                <li className='LIST'>Developed Revit model and supported in technical data release:<br></br>
                <p className='PARAGRAPH'>-Set up Revit model for local work-sharing using worksets -Development of 
                                          work-sharing protocols -Development of Revit family content library</p>
                </li>


                <li className='LIST'>Revit training to wider project team:<br></br>
                <p className='PARAGRAPH'> -Standardising detailing practices, reducing drawing overrides and non parametric drawing practices
                                          -Provided training to 20 staff members on best naming practices based
                                          on PAS-1192-3:2014.</p>                
                </li>


                <li className='LIST'>BIM Project Delivery:<br></br>
                <p className='PARAGRAPH'>-Prepared drawing packages for contractor CP’s_(Stages 0 - 7) 
                                         -Responded to contractor RFI’s -Prepared NBS specification.</p>                
                </li>            
              </ul>


            <div className='TECH-STACK'><h4>TECH-STACK: AUTODESK_360, REVIT, DYNAMO, EXCEL, AUTOCAD, RHINO, INDESIGN</h4></div>
        </div>



        <div className='Work-Experience-Grid'>
            <div className='projects_title_holder'><h4>DAVID MILLER ARCHITECTS - 2021 _ DEC - 2021 DUBAI, UAE</h4></div>
            <div className='projects_title_holder'><p>A technical-led practice with a strong reputation for BIM, innovation and technology focused solutions.</p></div>
        </div>


        <div className='Work-Experience-Grid'>
      
            <div className='projects_title_holder'><h4> ZAHA HADID ARCHITECTS - 2021 _ DEC - 2021 DUBAI, UAE</h4></div>
            <div className='projects_title_holder'><p>A global design practice known for progressive architecture</p></div>
        </div>


        <div className='Work-Experience-Grid'>

            <div className='projects_title_holder'><h4> ATKINS DESIGN STUDIO - 2021 _ DEC - 2021 DUBAI, UAE</h4></div>
            <div className='projects_title_holder'><p>A well-respected multidisciplinary engineering firm known for Crossrail</p></div>
        </div>
                      
        </Collapse.Panel>
        </Collapse>
      </div> 
    </div>
  );
}



export default App;








