import './App.css';
import {
  Accordion,
  AccordionContent,
  AccordionHeader,
  AccordionItem
}  from './components/accordion/src';

function App() {
  return (
    <div className="app">
      <Accordion>
        <AccordionItem>
        <AccordionHeader>
          Header
        </AccordionHeader>
        <AccordionContent>
          Content
        </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default App;
