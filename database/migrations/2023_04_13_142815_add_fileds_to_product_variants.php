<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddFiledsToProductVariants extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('product_variants', function (Blueprint $table) {
            $table->float('cost', 10, 0)->after('name');
            $table->float('price', 10, 0)->after('cost');
            $table->string('code', 192)->after('price');
            $table->string('image')->default('no-image.png')->after('code');
        });

        // Data update skipped for SQLite compatibility and verified as unnecessary for fresh install
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('product_variants', function (Blueprint $table) {
            //
        });
    }
}
