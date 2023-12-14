#
# Copyright (c) 2023 Ryo-Kgym.
#

if [ ! -f .env${1} ]; then
  echo "File not found!"
  exit 1
fi

source .env${1}
export DB_HOST=${DB_HOST}
export DB_PORT=${DB_PORT}
export DB_NAME=${DB_NAME}
export DB_USER=${DB_USER}
export DB_PASS=${DB_PASS}
export WORK_DB_HOST=${WORK_DB_HOST}
export WORK_DB_PORT=${WORK_DB_PORT}
export WORK_DB_NAME=${WORK_DB_NAME}
export WORK_DB_USER=${WORK_DB_USER}
export WORK_DB_PASS=${WORK_DB_PASS}

pushd ./home-helper-batch
sh ./gradlew bootRun
popd