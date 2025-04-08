import React from 'react';
import { HashRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css'
import PageLayout from './components/PageLayout';
import Header from './components/Header'
import Footer from './components/Footer'
import MainPage from './subpages/MainPage'
import PageContent from './components/PageContent';
import NotFound from './subpages/NotFound';
import Beginning from './subpages/med/Beginning';
import Psychiatrist from './subpages/med/Psychiatrist';
import Endocrynologist from './subpages/med/Endocrinologist';
import Surgeries from './subpages/med/Surgeries';
import GP from './subpages/med/GP';
import Notary from './subpages/docs/Notary';
import TextContentPage from './components/TextContentPage';
import TermsOfUse from './subpages/TermsOfUse';
import PrivacyPolicy from './subpages/PrivacyPolicy';

function App() {
  return (
    <PageLayout>
      <Router baseUrl={import.meta.env.VITE_BASE_URL}>
        <Header/>
        <PageContent>
          <Routes>
            <Route index exact path="/" element={<MainPage />}/>

            <Route exact path="/beginning" element={<Beginning />}/>
            <Route exact path="/psychiatrist" element={<Psychiatrist />}/>
            <Route exact path="/endocrynologist" element={<Endocrynologist />}/>
            <Route exact path="/surgeries" element={<Surgeries />}/>
            <Route exact path="/gp" element={<GP />}/>
            <Route exact path="/notary" element={<Notary />}/>
            <Route exact path="/birthcert" element={<TextContentPage text="TBD" vars={{}} />}/>
            <Route exact path="/passports" element={<TextContentPage text="TBD" vars={{}} />}/>
            <Route exact path="/taxcode" element={<TextContentPage text="TBD" vars={{}} />}/>
            <Route exact path="/addressreg" element={<TextContentPage text="TBD" vars={{}} />}/>
            <Route exact path="/entrepreneurship" element={<TextContentPage text="TBD" vars={{}} />}/>
            <Route exact path="/banks" element={<TextContentPage text="TBD" vars={{}} />}/>
            <Route exact path="/employmentbook" element={<TextContentPage text="TBD" vars={{}} />}/>
            <Route exact path="/diplomas" element={<TextContentPage text="TBD" vars={{}} />}/>
            <Route exact path="/registers" element={<TextContentPage text="TBD; Центрі зайнятості (оновлено автоматично? синхронізовано з ПФУ? я не був там зареєстрований раніше? хто зна), Пенсійному фонді, Фонді соціального страхування (ліквідовано в 2023, повноваження передані до ПФУ https://zakon.rada.gov.ua/laws/show/2620-20#n2 сорц: https://www.donbasssos.org/fssu-likviduvaly-kudy-zvertatysia/), Державному реєстрі виборців (наразі зміни не вносяться https://www.drv.gov.ua/portal/cm?option=ext_static_page&ppg_id=110&pmn_id=100 але їх можна буде внести онлайн на сайті)" vars={{}} />}/>
            <Route exact path="/healthdb" element={<TextContentPage text="TBD" vars={{}} />}/>
            <Route exact path="/driverslicense" element={<TextContentPage text="TBD" vars={{}} />}/>
            <Route exact path="/ownershipdocs" element={<TextContentPage text="TBD" vars={{}} />}/>
            <Route exact path="/contracts" element={<TextContentPage text="TBD; з операторами, кредитні, депозитні, ФОП, трудові, комуналка, та з іншими надавачами послуг і не тільки" vars={{}} />}/>
            <Route exact path="/militaryoffice" element={<TextContentPage text="TBD" vars={{}} />}/>

            <Route exact path="/privacy" element={<PrivacyPolicy />}/>
            <Route exact path="/terms" element={<TermsOfUse />}/>

            <Route exact path="/404" element={<NotFound />} />
            <Route path="/*" element={<Navigate replace to="/404" />} />
          </Routes>
        </PageContent>
        <Footer/>
      </Router>
    </PageLayout>
  )
};

export default App;
