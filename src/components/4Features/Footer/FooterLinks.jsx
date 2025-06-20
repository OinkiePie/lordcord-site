import { Link } from 'react-router-dom';
import { LangChangingContext } from '@context/LangContext';
import { useContext } from 'react';

export default function FooterLinks() {
  const { t } = useContext(LangChangingContext);

  return (
    <div className='links'>
      <div className='links_container'>
        <div className='links_container_column'>
          <Link to={'/'}>{t('footer.main')}</Link>
          <a
            href='https://docs.lordcord.fun/'
            target='blank'>
            {t('footer.documentation')}
          </a>
          <Link to={'/commands'}>{t('footer.commands')}</Link>
          <a
            href='https://support.lordcord.fun/'
            target='blank'>
            {t('footer.feedback')}
          </a>
        </div>
        <div className='links_container_column'>
          {/* <Link to={'/support'}>{t('footer.supportUs')}</Link> */}
          <a
            href='https://support.lordcord.fun/'
            target='blank'>
            {t('footer.invite')}
          </a>
          <a
            href='https://jino.ru'
            target='blank'>
            {t('footer.poweredBy')}
          </a>
          {/* <a
              href=''
              target='blank'>
              {t('footer.status')}
            </a> */}
          <a
            href='https://lordcord.gitbook.io/other-information/terms-of-service'
            target='blank'>
            {t('footer.termsOfUse')}
          </a>
          <a
            href='https://lordcord.gitbook.io/other-information/privacy-policy'
            target='blank'>
            {t('footer.confidentiality')}
          </a>
        </div>
      </div>
      {/* <div className='flex flex-col 2sm:text-center md:text-start gap-2'>
          <a
            href=''
            target='blank'>
            {t('footer.termsOfUse')}
          </a>
          <a
            href=''
            target='blank'>
            {t('footer.confidentiality')}
          </a>
          <a
            href=''
            target='blank'>
            {t('footer.cookies')}
          </a>
        </div> */}
    </div>
  );
}
