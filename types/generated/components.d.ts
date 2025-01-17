import type { Struct, Schema } from '@strapi/strapi';

export interface SharedSharedImage extends Struct.ComponentSchema {
  collectionName: 'components_shared_shared_images';
  info: {
    displayName: 'SharedImage';
    icon: 'picture';
  };
  attributes: {
    alt: Schema.Attribute.String;
    media: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'Seo';
    icon: 'manyWays';
  };
  attributes: {
    metaTitle: Schema.Attribute.String;
    metaDescription: Schema.Attribute.String;
    sharedImage: Schema.Attribute.Component<'shared.shared-image', false>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.shared-image': SharedSharedImage;
      'shared.seo': SharedSeo;
    }
  }
}
