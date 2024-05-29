import type { Schema, Attribute } from '@strapi/strapi';

export interface CarouselCarousel extends Schema.Component {
  collectionName: 'components_carousel_carousels';
  info: {
    displayName: 'Carousel';
  };
  attributes: {
    Text_on_image: Attribute.String;
    Banner: Attribute.Media;
    URL: Attribute.String;
  };
}

export interface ImportantNoticeShowNoticeMessage extends Schema.Component {
  collectionName: 'components_important_notice_show_notice_messages';
  info: {
    displayName: 'Show Notice Message';
    icon: 'plus';
    description: '';
  };
  attributes: {
    Message: Attribute.Blocks;
    choose_the_priority: Attribute.Enumeration<['Red', 'Green', 'Yellow']> &
      Attribute.Required;
  };
}

export interface QuickLinkQuickLink extends Schema.Component {
  collectionName: 'components_quick_link_quick_links';
  info: {
    displayName: 'QuickLink';
    icon: 'plus';
  };
  attributes: {
    title: Attribute.String;
    url: Attribute.String;
    Hex_color_code: Attribute.Enumeration<['Red', 'Green', 'Yellow']>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'carousel.carousel': CarouselCarousel;
      'important-notice.show-notice-message': ImportantNoticeShowNoticeMessage;
      'quick-link.quick-link': QuickLinkQuickLink;
    }
  }
}
