export SECRET_KEY_BASE=jYlyjZqfiUOX6GSxreUOqZ7KU+nWTjivhbBK2/up0Ie3RVHaAvODCdRQniKng42Z
export MIX_ENV=prod
export PORT=4795
export NODEBIN=`pwd`/assets/node_modules/.bin
export PATH="$PATH:$NODEBIN"

echo "Building..."

mix deps.get
mix compile
(cd assets && npm install)
(cd assets && webpack --mode production)
mix phx.digest

echo "Generating release..."
mix release

#echo "Stopping old copy of app, if any..."
#_build/prod/rel/practice/bin/practice stop || true

echo "Starting app..."

PROD=t ./start.sh
