<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddForeignKeysToSaleReturnsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::table('sale_returns', function(Blueprint $table)
		{
			$table->foreign('client_id', 'sale_returns_client_id_fk')->references('id')->on('clients')->onUpdate('RESTRICT')->onDelete('RESTRICT');
			$table->foreign('user_id', 'sale_returns_user_id_fk')->references('id')->on('users')->onUpdate('RESTRICT')->onDelete('RESTRICT');
			$table->foreign('warehouse_id', 'sale_returns_warehouse_id_fk')->references('id')->on('warehouses')->onUpdate('RESTRICT')->onDelete('RESTRICT');
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::table('sale_returns', function(Blueprint $table)
		{
			$table->dropForeign('sale_returns_client_id_fk');
			$table->dropForeign('sale_returns_user_id_fk');
			$table->dropForeign('sale_returns_warehouse_id_fk');
		});
	}

}
