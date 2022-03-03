import { MouseEvent, useState } from 'react';
import { Film } from '../../types/films';
import { Tab } from '../../types/tabs';
import FilmDetailsTab from '../film-details-tab/film-details-tab';
import FilmOverviewTab from '../film-overview-tab/film-overview-tab';
import FilmReviewsTab from '../film-reviews-tab/film-reviews-tab';

type TabsProps = {
  film: Film | null;
}
type TabComponent = {
  [key: string]: (props?: any) => JSX.Element;
}

const TABS: Tab[] = [
  {
    href: '#',
    id: 'overview',
    title: 'Overview',
  },
  {
    href: '#',
    id: 'details',
    title: 'Details',
  },
  {
    href: '#',
    id: 'reviews',
    title: 'Reviews',
  },
];

function Tabs(
  {
    film,
  }: TabsProps,
): JSX.Element {
  const TabComponent: TabComponent = {
    overview: (props) => <FilmOverviewTab {...props} />,
    details: (props) => <FilmDetailsTab {...props} />,
    reviews: (props) => <FilmReviewsTab {...props} />,
  };
  const [activeTabId, setActiveTabId] = useState('overview');
  const handleClick = (evt: MouseEvent, tabId: string): void => {
    evt.preventDefault();
    setActiveTabId(tabId);
  };

  return (
    <>
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          {
            TABS.map((tab) => (
              <li
                key={tab.id}
                className={`film-nav__item ${tab.id === activeTabId ? 'film-nav__item--active' : ''}`}
              >
                <a
                  className="film-nav__link"
                  href={tab.href}
                  onClick={(evt) => handleClick(evt, tab.id)}
                >
                  {tab.title}
                </a>
              </li>
            ))
          }
        </ul>
      </nav>

      {TabComponent[activeTabId](film)}
    </>
  );
}

export default Tabs;
