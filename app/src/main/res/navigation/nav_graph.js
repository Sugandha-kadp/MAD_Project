<?xml version="1.0" encoding="utf-8"?>
<navigation xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    xmlns:tools="http://schemas.android.com/tools"
    android:id="@+id/nav_graph"
    app:startDestination="@id/shopFragment">

    <fragment
        android:id="@+id/shopFragment"
        android:name="com.example.cartproject.views.ShopFragment"
        android:label="Shop"
        tools:layout="@layout/fragment_shop">
        <action
            android:id="@+id/action_shopFragment_to_productDetailFragment"
            app:destination="@id/productDetailFragment"
            app:enterAnim="@anim/slide_in_right"
            app:exitAnim="@anim/slide_out_left"
            app:popEnterAnim="@anim/slide_in_left"
            app:popExitAnim="@anim/slide_out_right" />
        <action
            android:id="@+id/action_shopFragment_to_cartFragment"
            app:destination="@id/cartFragment" />
    </fragment>
    <fragment
        android:id="@+id/productDetailFragment"
        android:name="com.example.cartproject.views.ProductDetailFragment"
        android:label="Product Detail"
        tools:layout="@layout/fragment_product_detail">
        <action
            android:id="@+id/action_productDetailFragment_to_cartFragment"
            app:destination="@id/cartFragment" />
    </fragment>
    <fragment
        android:id="@+id/cartFragment"
        android:name="com.example.cartproject.views.CartFragment"
        android:label="Cart"
        tools:layout="@layout/fragment_cart">
        <action
            android:id="@+id/action_cartFragment_to_orderFragment"
            app:destination="@id/orderFragment"
            app:popUpTo="@id/shopFragment" />
    </fragment>
    <fragment
        android:id="@+id/orderFragment"
        android:name="com.example.cartproject.views.OrderFragment"
        android:label="Order"
        tools:layout="@layout/fragment_order">
        <action
            android:id="@+id/action_orderFragment_to_shopFragment"
            app:destination="@id/shopFragment" />
    </fragment>
</navigation>
