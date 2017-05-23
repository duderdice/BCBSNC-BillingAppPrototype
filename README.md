# BCBSNC-BillingAppPrototype
prototype ionic app for showing billing capabilities for a prospective client


# How to setup and run the apps

Ensure Android SDK is installed and is available in your PATH.

0. Ensure the following frameworks are installed...

    ```npm install -g yarn ionic cordova```

1. In the project root folder, install packages by running yarn

    ```yarn```

2. Build the Android version of the application using the following command (should offer to execute "cordova add android" for you, if platform not present)

    ```ionic cordova build android```

3. Run applicaiton using ONE of the following two commands:

    ```ionic cordova run android``` android emulated device should already be running
    
    ```ionic serve``` to view/debug in web browser (for easier dev/debugging cycle)

