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
export JOB_DB_HOST=${JOB_DB_HOST}
export JOB_DB_PORT=${JOB_DB_PORT}
export JOB_DB_NAME=${JOB_DB_NAME}
export JOB_DB_USER=${JOB_DB_USER}
export JOB_DB_PASS=${JOB_DB_PASS}

pushd ./home-helper-batch
sh ./gradlew bootRun
popd