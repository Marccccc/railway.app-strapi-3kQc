export default ({ env }) => ({
    'users-permissions': {
        config: {
            jwtSecret: env('JWT_SECRET'),
        },
    },
    upload: {
        config: {
            provider: "strapi-provider-upload-tencent-cloud-storage",
            providerOptions: {
                CDNDomain: "imgmarc.site",
                SecretId: env("COS_SecretId"),
                SecretKey: env("COS_SecretKey"),
                Region: env("COS_Region"),
                Bucket: env("COS_Bucket"),
            },
        },
    },
});
