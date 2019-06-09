#!/bin/sh
GAE_PRJ_ID="<<PROJECT_ID>>"
GAE_APP_YML="app.yaml"
GAE_DEPLOY_VERSION="<<DEPLOY_VERSION>>"
GAE_URL="https://${GAE_DEPLOY_VERSION}-dot-${GAE_PRJ_ID}.appspot.com"

npm run build

if [ $? -ne 0 ]; then
  echo "npm build failed."
  exit 1
fi

echo "Y" | \
  gcloud --project $GAE_PRJ_ID \
  app \
  deploy $GAE_APP_YML \
  --version $GAE_DEPLOY_VERSION \
  --no-promote

open $GAE_URL
